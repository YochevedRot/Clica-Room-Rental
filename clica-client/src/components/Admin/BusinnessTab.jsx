import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Services from '../Services/service3+';
import MeetingTable from '../Meetings/MeetingTable';
import SwitchService from '../Services/switchServicesFile';
import ButtonAddService from '../AddService/AddService';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CustomTabPanel(props) {
  const { children, value, index } = props;

  return (
    <div hidden={value !== index}>
      {value === index && (<Box sx={{ p: 7 }}> {children} </Box>)}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // if(newValue == 0)
    // {
    //   navigate("meetings")
    // }
    // else{
    //   navigate("services")
    // }
  };


  return (
    <Box sx={{ width: '100vw', height: '50vh' }}>
      <Tabs value={value} onChange={handleChange} sx={{ borderBottom: 1, borderColor: 'orange' }}
        textColor="orange" indicatorColor="warning" variant="fullWidth">
        <Tab label="פגישות" sx={{ width: '100%' }} />
        <Tab label="שרותים" sx={{ width: '100%' }} />
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <MeetingTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <SwitchService />
        <ButtonAddService />
      </CustomTabPanel>
    </Box>


  );
}