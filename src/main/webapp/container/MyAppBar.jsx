import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const MyAppBar = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <IconButton color="contrast" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography type="title" color="inherit" style={{flex: 1}}>
        Stefan Hauschildt
      </Typography>
    </Toolbar>
  </AppBar>
);

export default MyAppBar;