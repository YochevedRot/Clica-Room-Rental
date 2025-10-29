import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react"
import CheckLogin from '../../Data/checkLogin';

function LoginAdmin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    CheckLogin(username, password)
    setUsername("")
    setPassword("");
  };

  return (
    <>
      <div >
        <TextField
          id="input-with-icon-adornment" label="שם משתמש" variant="outlined" color="warning"
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <br></br><br></br>

        <TextField
          id="outlined-basic" label="סיסמא" type="password" variant="outlined" color="warning"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br><br></br>

        <Button
          variant="contained" color="warning"
          onClick={handleLogin}> כניסה </Button>
      </div>
    </>
  )
}

export default LoginAdmin