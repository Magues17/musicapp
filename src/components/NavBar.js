import React from "react";

import { AppBar } from '@mui/material';
import { Box } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';

export default function NavBar() {
    return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar postion="static" style={{ height: 50 }}>
    <Toolbar varient="dense">
      <Typography variant="h6" color="inherit" component="div"  style={{ fontSize: 18 }}>
      Material Ui Music App
      </Typography>
    </Toolbar>
    </AppBar>
    </Box>
  )
}