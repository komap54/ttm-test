import * as React from 'react';
import {
  AppBar,  
  Toolbar, 
  Typography,
  IconButton,
} from '@material-ui/core';

import {
  Menu as MenuIcon,
} from '@material-ui/icons'
import * as classes from './style.css'; 

interface Props {
  title: string,
  visibleBackButton: boolean,
  handleMenuToggle: Function
}

function ButtonAppBar(props: Props) {
  const { title, visibleBackButton, handleMenuToggle } = props; 
  return (
    <AppBar position="sticky" color="default">
        <Toolbar>
          <div className={classes.menuButton}>
          <IconButton color="inherit" aria-label="Menu" onClick={() => handleMenuToggle(true)}>
            <MenuIcon />
          </IconButton>
          </div>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default ButtonAppBar;