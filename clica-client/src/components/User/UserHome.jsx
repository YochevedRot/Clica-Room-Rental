import React from "react"
import { observer } from "mobx-react"
import HomeUp from '../Login/HomeUp'
import SwitchService from "../Services/switchServicesFile"
import ButtonMakeMeeting from "./MakeMeeting"
import { Box } from "@mui/material"

const UserHome = (observer(() => {

  return (
    <>
      <HomeUp />
      <Box sx={{
        backgroundImage: "url('/src/img/3.jpg')", backgroundColor: '#FEF9B4',
        width: '100%', height: '100vh', top: '100px', position: 'fixed', right: '0'
      }}>
        <br /> <br /> <br /> <br />
        <h2>שרותים</h2>
        <br />
        <SwitchService />
        <br /> <br />
        <ButtonMakeMeeting />
      </Box>
    </>
  )
}))

export default UserHome