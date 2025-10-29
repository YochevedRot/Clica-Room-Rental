import * as React from 'react';
import Box from '@mui/material/Box';
import BusinnessServices from '../../store/BusinnessServices';
import { observer } from 'mobx-react';

const Services1 = (observer(() => {
  return (
    <Box sx={{ width: '80vw', display: 'flex', justifyContent: 'center' }}>
      <Box>
        {BusinnessServices.servicesList[0].name} <br />
        {BusinnessServices.servicesList[0].description} <br />
        {BusinnessServices.servicesList[0].cost} </Box>
    </Box>
  );
}))
export default Services1;

