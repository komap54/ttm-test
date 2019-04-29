import * as React from 'react'
import * as classes from './style.css';
import {
  Typography,
  Paper,
} from '@material-ui/core'

const Logo = require('../../assests/logo.png');

interface IPropsTmpAuth {
  children: React.ReactNode
}

const TemplateAuth = (props: IPropsTmpAuth) => (
  <div className={classes.page}>
    <div className={classes.pageImg}>
      <img className={classes.img} src={Logo} alt="Time Tutor Manager" />
    </div>
    <Typography variant="display2" gutterBottom align="center">Time Tutor Manager</Typography>
    <Paper className={classes.pageForm}>
      {props.children}
    </Paper>
  </div> 
);

export default TemplateAuth