import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BusinnessServices from '../../store/BusinnessServices';
import { observer } from 'mobx-react';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

const Services3 = (observer(() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = BusinnessServices.servicesList.length - 2;
  const handleNext = () => { setActiveStep((prevActiveStep) => prevActiveStep + 1) };
  const handleBack = () => { setActiveStep((prevActiveStep) => prevActiveStep - 1) };


  return (
    <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'space-between' }}>
      <Button sx={{ height: '8vh', color: 'orange', left: '10vw' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
        <ArrowBackIos fontSize='large' /> <ArrowBackIos fontSize='large' /></Button>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {BusinnessServices.servicesList[activeStep].name} <br />
        {BusinnessServices.servicesList[activeStep].description} <br />
        {BusinnessServices.servicesList[activeStep].cost} </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {BusinnessServices.servicesList[activeStep + 1].name} <br />
        {BusinnessServices.servicesList[activeStep + 1].description} <br />
        {BusinnessServices.servicesList[activeStep + 1].cost} </Box>

      <Box sx={{ width: '10vw', borderBlockEnd: 'solid 1px orange' }}>
        {BusinnessServices.servicesList[activeStep + 2].name} <br />
        {BusinnessServices.servicesList[activeStep + 2].description} <br />
        {BusinnessServices.servicesList[activeStep + 2].cost} </Box>

      <Button sx={{ height: '8vh', color: 'orange', right: '10vw' }} onClick={handleNext} disabled={activeStep === maxSteps - 1} >
        <ArrowForwardIosTwoToneIcon fontSize='large' /> <ArrowForwardIosTwoToneIcon fontSize='large' /></Button>
    </Box>
  );
}))
export default Services3;

