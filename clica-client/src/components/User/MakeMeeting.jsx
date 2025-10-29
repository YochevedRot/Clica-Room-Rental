import React, { useState } from 'react';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { Fab } from '@mui/material';
import NewForm from './MakeMeetingForm';

const ButtonMakeMeeting = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true)
  }

  return (<>
    <Fab color="warning" aria-label="edit" sx={{ position: 'fixed', left: '25px', bottom: '25px' }} onClick={handleClick}>
      <EditCalendarIcon />
    </Fab>
    {isClicked && <NewForm setIsClicked={setIsClicked} />}
  </>)

};

export default ButtonMakeMeeting;