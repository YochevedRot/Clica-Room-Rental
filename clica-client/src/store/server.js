import axios from 'axios';
import BusinnessServices from './BusinnessServices.js';
import AdminEdit from './AdminEdit.js';
import Meetings from './Meetings.js';
import dataStore from '../Data/dataStore.jsx';


export async function getServices() {
  try {
    const services = await axios.get('http://localhost:8787/services');
    BusinnessServices.setServices(services.data);
  } catch (error) {
  }
}

export async function setServices(name, description, cost) {
  try {
    const res = await axios.post('http://localhost:8787/service', { "name": name, "description": description, "cost": cost });
    return "success";

  } catch (error) {
    alert("there is a service in this name");
  }
}

export async function getMeetings() {
  try {
    const meetings = await axios.get('http://localhost:8787/appointments');
    Meetings.setMeetings(meetings.data);
  } catch (error) {
  }
}

export async function setMeetings(service, date, name, phone) {
  try {
    const res = await axios.post('http://localhost:8787/appointment', { "service": service, "dateTime": date, "name": name, "phone": phone });
    dataStore.setIsMakeMeeting(true)
    return "הפגישה נקבע בהצלחה";

  } catch (error) {
    dataStore.setIsMakeMeeting(false)
    return "הזמן שבחרת תפוס - בחר מחדש";
  }
}

export async function getBusinessData() {
  try {
    const businessData = await axios.get('http://localhost:8787/businessData');
    const { name, address, phone, email } = businessData.data;
    AdminEdit.updateDetails(name, address, phone, email);
  }
  catch (error) {
  }
}

export async function setBusinessData(name, address, phone, email) {
  try {
    const res = await axios.post('http://localhost:8787/businessData', { "name": name, "address": address, "phone": phone, "email": email });
    return "success";

  } catch (error) {
  }
}  