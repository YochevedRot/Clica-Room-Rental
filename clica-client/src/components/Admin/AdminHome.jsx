import React from "react"
import { observer } from "mobx-react"
import BusinnessTab from "./BusinnessTab"
import { Box } from "@mui/material"

const AdminHome = (observer(() => {

  return (
    <>
      <Box sx={{ backgroundImage: "url('/src/img/3.jpg')", backgroundColor: '#FEF9B4', width: '100%', height: '100vh', top: '100px', position: 'fixed', right: '0' }}>
        <br /> <br /> <br /> <br />
        <BusinnessTab />
      </Box>
    </>
  )
}))

export default AdminHome