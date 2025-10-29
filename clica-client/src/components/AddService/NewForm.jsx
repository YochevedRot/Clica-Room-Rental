import { Button, TextField } from "@mui/material"
import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import SaveChanges from "./SaveChanges‏ ";

const NewForm = (observer(({setIsClicked}) => {
    const [name, setName] = useState("שרות חדש");
    const [description, setDescription] = useState("...");
    const [cost, setCost] = useState('ש"ח');
    const handleClose = () => { setIsClicked(false); };

    return (
        <>
            <React.Fragment>
                <Dialog open={true} onClose={handleClose}>
                    <DialogTitle>
                        <TextField
                            id="outlined-basic" label="שם השרות" type="text" variant="filled" color="warning"
                            value={name} onChange={(e) => setName(e.target.value)} />

                        <TextField
                            id="outlined-basic" label="תאור" type="text" variant="filled" color="warning"
                            value={description} onChange={(e) => setDescription(e.target.value)} /> <br /> <br />

                        <TextField
                            id="outlined-basic" label="עלות" type="text" variant="filled" color="warning"
                            value={cost} onChange={(e) => setCost(e.target.value)} /> <br /> <br />

                        <Button variant="contained" color="warning"
                            onClick={() => SaveChanges(name, description, cost)}> אישור </Button>
                    </DialogTitle>
                    <DialogActions> <Button onClick={handleClose} sx={{ color: 'orange' }}>סגור</Button> </DialogActions>
                </Dialog>
            </React.Fragment>

        </>
    )
}))
export default NewForm