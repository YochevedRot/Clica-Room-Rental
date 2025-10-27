import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, 'data.json');
const PORT = process.env.PORT || 8787;

// ---------------- Helpers ----------------
function ensureDataFile() {
  if (!fs.existsSync(DATA_PATH)) {
    const seed = {
      services: [
        {
          id: 1,
          name: 'אולם פעילות גדול',
          description: 'אולם המתאים לאירועים גדולים וישיבות מרובות משתתפים',
          cost: 350
        },
        {
          id: 2,
          name: 'חדר ישיבות A',
          description: 'חדר ישיבות יוקרתי עם מסך ולוח מחיק',
          cost: 120
        }
      ],
      appointments: [],
      businessData: {
        name: 'מרכז השכרות – רום',
        address: 'הרצל 10, תל אביב',
        phone: '03-1234567',
        email: 'info@room-center.co.il'
      },
      admin: {
        username: 'admin',
        password: '1234'
      }
    };
    fs.writeFileSync(DATA_PATH, JSON.stringify(seed, null, 2), 'utf8');
  }
}

function readData() {
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
}

function writeData(obj) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(obj, null, 2), 'utf8');
}

// ---------------- App Setup ----------------
ensureDataFile();
const app = express();
app.use(cors());
app.use(express.json());

// ---------------- Routes ----------------

// בריאות
app.get('/health', (_, res) => res.json({ ok: true }));

// ---------- שירותים ----------
app.get('/services', (_, res) => {
  const data = readData();
  res.json(data.services);
});

// יצירת שירות חדש
app.post('/service', (req, res) => {
  const { name, description, cost } = req.body || {};
  if (!name || !description || !cost) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const data = readData();

  // בדיקה שאין שירות באותו שם
  if (data.services.find(s => s.name === name)) {
    return res.status(400).json({ message: 'Service with this name already exists' });
  }

  const id = data.services.length ? Math.max(...data.services.map(s => s.id)) + 1 : 1;
  const newService = { id, name, description, cost: Number(cost) };
  data.services.push(newService);
  writeData(data);
  res.status(201).json(newService);
});

/* ---------- Services: UPDATE / DELETE ---------- */

// עדכון שירות קיים
app.put('/service/:id', (req, res) => {
  const id = Number(req.params.id);
  const { name, description, cost } = req.body || {};
  const data = readData();

  const i = data.services.findIndex(s => s.id === id);
  if (i === -1) return res.status(404).json({ message: 'Service not found' });

  // בדיקת כפילות שם (אם שונה)
  if (name && data.services.some(s => s.name === name && s.id !== id)) {
    return res.status(400).json({ message: 'Service with this name already exists' });
  }

  if (name != null) data.services[i].name = name;
  if (description != null) data.services[i].description = description;
  if (cost != null) {
    const n = Number(cost);
    if (Number.isNaN(n)) return res.status(400).json({ message: 'Invalid cost' });
    data.services[i].cost = n;
  }

  writeData(data);
  res.json(data.services[i]);
});

// מחיקת שירות
app.delete('/service/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const before = data.services.length;
  data.services = data.services.filter(s => s.id !== id);

  if (data.services.length === before) {
    return res.status(404).json({ message: 'Service not found' });
  }

  // אופציונלי: מחיקת פגישות של השירות הזה (בטל הערה אם תרצי)
  // data.appointments = data.appointments.filter(a => a.service !== id && a.service !== data.services.find(s => s.id === id)?.name);

  writeData(data);
  res.status(204).end();
});


// ---------- פגישות ----------
app.get('/appointments', (_, res) => {
  const data = readData();
  res.json(data.appointments);
});

app.post('/appointment', (req, res) => {
  const { service, dateTime, name, phone } = req.body || {};
  if (!service || !dateTime || !name || !phone) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const data = readData();

  // בדיקה שאין פגישה באותו זמן
  const exists = data.appointments.find(a => a.dateTime === dateTime);
  if (exists) {
    return res.status(409).json({ message: 'Time slot already taken' });
  }

  const id = data.appointments.length ? Math.max(...data.appointments.map(a => a.id)) + 1 : 1;
  const appointment = { id, service, dateTime, name, phone };
  data.appointments.push(appointment);
  writeData(data);
  res.status(201).json(appointment);
});

/* ---------- Appointments: UPDATE / DELETE ---------- */

// עדכון פגישה
app.put('/appointment/:id', (req, res) => {
  const id = Number(req.params.id);
  const { service, dateTime, name, phone } = req.body || {};
  const data = readData();

  const i = data.appointments.findIndex(a => a.id === id);
  if (i === -1) return res.status(404).json({ message: 'Appointment not found' });

  // אם משנים זמן — ודאי שאין כפילות (מלבד אותה פגישה)
  if (dateTime != null) {
    const clash = data.appointments.find(a => a.id !== id && a.dateTime === dateTime);
    if (clash) return res.status(409).json({ message: 'Time slot already taken' });
    data.appointments[i].dateTime = dateTime;
  }

  if (service != null) data.appointments[i].service = service;
  if (name != null) data.appointments[i].name = name;
  if (phone != null) data.appointments[i].phone = phone;

  writeData(data);
  res.json(data.appointments[i]);
});

// מחיקת פגישה
app.delete('/appointment/:id', (req, res) => {
  const id = Number(req.params.id);
  const data = readData();
  const before = data.appointments.length;
  data.appointments = data.appointments.filter(a => a.id !== id);

  if (data.appointments.length === before) {
    return res.status(404).json({ message: 'Appointment not found' });
  }

  writeData(data);
  res.status(204).end();
});


// ---------- פרטי עסק ----------
app.get('/businessData', (_, res) => {
  const data = readData();
  res.json(data.businessData);
});

app.post('/businessData', (req, res) => {
  const { name, address, phone, email } = req.body || {};
  if (!name || !address || !phone || !email) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const data = readData();
  data.businessData = { name, address, phone, email };
  writeData(data);
  res.json({ ok: true, businessData: data.businessData });
});

// ---------- מנהל ----------
app.post('/login', (req, res) => {
  const { name, password } = req.body || {};
  const data = readData();
  const admin = data.admin;
  const valid =
    (name ? name === admin.username : true) && password === admin.password;

  if (!valid) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ ok: true, user: { role: 'admin', name: admin.username } });
});

app.post('/admin/password', (req, res) => {
  const { oldPassword, newPassword } = req.body || {};
  if (!oldPassword || !newPassword) {
    return res.status(400).json({ message: 'oldPassword and newPassword are required' });
  }
  const data = readData();
  if (data.admin.password !== oldPassword) {
    return res.status(401).json({ message: 'Old password incorrect' });
  }
  data.admin.password = String(newPassword);
  writeData(data);
  res.json({ ok: true });
});

// ---------------- Start ----------------
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
