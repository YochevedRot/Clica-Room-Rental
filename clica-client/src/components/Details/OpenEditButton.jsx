import React, { useState } from 'react';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import NewForm from './EditDetailsForm';

function OpenDialogButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>
      <Fab color="warning" aria-label="edit" onClick={handleClickOpen}  >
        <EditIcon />
      </Fab>
      {open && <NewForm setOpen={setOpen} />}
    </div>
  );
}

export default OpenDialogButton;
