import { Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import AdminEdit from "../../store/AdminEdit.js";
import SaveChanges from "./SaveChanges‏.jsx";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const NewForm = (observer(({ setOpen }) => {
  const [Bname, setBname] = useState(AdminEdit.name ?? "קליקה מודיעין עילית");
  const [Baddress, setBaddress] = useState(AdminEdit.address ?? "אבני נזר 36");
  const [Bphone, setBphone] = useState(AdminEdit.phone ?? "08-6668342");
  const [Bemail, setBemail] = useState(AdminEdit.email ?? 'klika@modil.org.il');
  const handleClose = () => { setOpen(false); };

  return (
    <>
      <React.Fragment>
        <Dialog open={true} onClose={handleClose}>
          <DialogTitle>
            <TextField
              id="outlined-basic" label="שם העסק" type="text" variant="filled" color="warning"
              value={Bname} onChange={(e) => setBname(e.target.value)} />

            <TextField
              id="outlined-basic" label="כתובת" type="text" variant="filled" color="warning"
              value={Baddress} onChange={(e) => setBaddress(e.target.value)} /> <br /> <br />

            <TextField
              id="outlined-basic" label="טלפון" type="text" variant="filled" color="warning"
              value={Bphone} onChange={(e) => setBphone(e.target.value)} />

            <TextField
              id="outlined-basic" label="מייל" type="email" variant="filled" color="warning"
              value={Bemail} onChange={(e) => setBemail(e.target.value)} /> <br /> <br />

            <Button variant="contained" color="warning"
              onClick={() => SaveChanges(Bname, Baddress, Bphone, Bemail)}> אישור </Button>             </DialogTitle>
          <DialogActions>
            <Button onClick={handleClose} sx={{ color: 'orange' }}>סגור</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>

      <Button onClick={handleClose} sx={{ color: 'orange' }}>סגור</Button>

    </>
  )
}))
export default NewForm