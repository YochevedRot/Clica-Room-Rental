import * as React from 'react';
import Box from '@mui/material/Box';
import BusinnessServices from '../../store/BusinnessServices';
import { observer } from 'mobx-react';

const Services2 = (observer(() => {
  return (
    <Box sx={{ width: '80vw', display: 'flex', justifyContent: 'space-evenly' }}>
      <Box sx={{ width: '20%' }}>
        {BusinnessServices.servicesList[0].name} <br />
        {BusinnessServices.servicesList[0].description} <br />
        {BusinnessServices.servicesList[0].cost} </Box>
      <Box sx={{ width: '20%' }}>
        {BusinnessServices.servicesList[1].name} <br />
        {BusinnessServices.servicesList[1].description} <br />
        {BusinnessServices.servicesList[1].cost} </Box>
    </Box>
  );
}))
export default Services2;

