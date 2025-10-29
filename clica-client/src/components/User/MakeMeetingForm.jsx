import { Button, TextField } from "@mui/material"
import React, { useState } from 'react';
import { observer } from "mobx-react";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import SaveChanges from "./SaveChanges‏ ";
import BusinnessServices from '../../store/BusinnessServices';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import dataStore from "../../Data/dataStore";

const NewForm = (observer(({ setIsClicked }) => {

  const [date, setDate] = useState(dayjs());
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [chosenService, setService] = useState('');
  const names = BusinnessServices.servicesList;
  const handleClick = () => { SaveChanges(chosenService, date, customerName, phone) }
  const handleClose = () => { setIsClicked(false); };

  let a = ""
  if (dataStore.isMakeMeeting == false) { a = "red" }
  else { a = "" }

  return (<>
    <React.Fragment>
      <Dialog open={true} onClose={handleClose}>
        <DialogTitle>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel color="warning">שם השרות</InputLabel>
            <Select
              value={chosenService} label="שם השרות" color="warning"
              onChange={(event) => setService(event.target.value)}>
              {names.map((name) => (<MenuItem key={name} value={name.name}> {name.name} </MenuItem>))}
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker
                id="makeDate" label="בחר תאריך" value={date} className={a}
                onChange={(newValue) => setDate(newValue)} />
            </DemoContainer>
          </LocalizationProvider> <br />

          <TextField
            id="outlined-basic" variant="filled" type="text" color="warning" label="שם"
            value={customerName} onChange={(e) => setCustomerName(e.target.value)} /> <br /><br />

          <TextField
            id="outlined-basic" type="tel" variant="filled" color="warning" label="פלאפון"
            value={phone} onChange={(e) => setPhone(e.target.value)} /> <br /><br />

          <Button variant="contained" color="warning" onClick={() => handleClick()}> אישור </Button>
        </DialogTitle>

        <DialogActions> <Button onClick={handleClose} sx={{ color: 'orange' }}>סגור</Button> </DialogActions>
      </Dialog>
    </React.Fragment>
  </>)
}))
export default NewForm