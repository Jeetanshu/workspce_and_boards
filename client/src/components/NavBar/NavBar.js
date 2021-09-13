import React, { useState, useEffect } from "react";
import { AppBar, Avatar, Typography, Toolbar, Button } from "@material-ui/core";

import useStyles from "./style";

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography to="/" className={classes.heading} variant="h2" align="center">Workspace and Board</Typography>
      </div>
    </AppBar>
  );
};

export default NavBar;