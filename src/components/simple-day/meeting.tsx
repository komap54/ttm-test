import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import * as API from '../../api/api';
import { 
  IconButton,
  Typography,
  ListItem,
  ListItemText,
  FormControlLabel,
  Switch,
} from '@material-ui/core';

import {
  KeyboardArrowRight
} from '@material-ui/icons';

import { IMeetingTable } from '../../stores/types';
import * as classes from './style.css'; 

class Meeting extends React.Component<IMeetingTable & RouteComponentProps, any> {
  
  state = {
    IsCanceled: this.props.IsCanceled,
  }

  componentDidMount() {
    
  }

  render() {
    const { IsCanceled } = this.state;
    return (
      <ListItem divider>
        <div className={classes.meetingDescript}>
          <ListItemText>
            <Typography variant="title" gutterBottom>
              {this.props.TimeStart.split(' ')[1] + '-' + this.props.TimeEnd.split(' ')[1]}
            </Typography>
            <Typography variant="body1">
              {this.props.Title}
            </Typography>
            <Typography variant="body1">Клиент: {this.props.Client}</Typography>
            {
              (this.props.Place) 
                ? <Typography variant="body1">Адрес: {this.props.Place}</Typography>
                : ''
            }
            {
              (this.props.InCome) ? <Typography variant="body1">Доход: {this.props.InCome}</Typography>
                              : ''
            }
            {
              (this.props.Notation) ? <Typography variant="body1">Примечание: {this.props.Notation}</Typography>
                              : ''
            }
          </ListItemText>
          <FormControlLabel
            control={
              <Switch
                checked={IsCanceled}
                onChange={this.handleChange}
                value={this.props.Id}
                color="primary"
              />
            }
            label="Отменить на 1 день"
          />
        </div>
      </ListItem>
    );
  }

  handleChange = (_, value) => {
    this.setState({IsCanceled: value})
    API.editDataMeeting(_.target.value, { IsCanceled: value })
      .then(r => {
        
      });
  } 

  handleClick = (event) => {
    const { history } = this.props;
    history.push(event.currentTarget.value);
  };
} 

export default withRouter(Meeting)