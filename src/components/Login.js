import React from "react";

import { Button } from '@mui/material';
import { TextField } from '@mui/material';

export default function Login({ handleClick }) {
  return (
    <div className="login-form-container">
      <div className="login-form">
        <TextField required
        id="standard-basic"
        label="Username"
        variant="standard"
        />
        <TextField required
        id="standard-basic"
        label="Password"
        variant="standard"
        />
        <Button
        variant="contained"
        color="primary"
        fullWidth={true}
        style={{ marginTop: 30 }}
        onClick={handleClick}
        >
          Login
        </Button>
      </div>
    </div>
  )
}