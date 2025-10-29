import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import BusinessDetails from '../Details/Details';
import { observer } from "mobx-react"


const ResponsiveAppBar = (observer(() => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#424242' }}>
      <Container>
        <Toolbar>
          <Box height={80} sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <BusinessDetails />
          </Box>
          <img src='./src/img/logo1.png' style={{ height: '70px', borderRadius: '50%' }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}))

export default ResponsiveAppBar;
