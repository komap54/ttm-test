import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import cn from 'classnames/bind';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrow from '@material-ui/icons/KeyboardArrowRight';
import { IMeetingTable } from '../../stores/types';
import * as classes from './style.css'; 

const DAYS_WEEK = [
  'Понедельник',    
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

export interface MeetingsOnDay extends RouteComponentProps {
  numberDayWeek: number,
  meetingsOnDay: IMeetingTable[]
}

class ShortSimpleDay extends React.Component<MeetingsOnDay & RouteComponentProps, any> {
  render() {
    const { numberDayWeek, meetingsOnDay } = this.props;
    const Meeting = this.renderMeeting.bind(this);
    const EmptyDay = this.renderEmptyDay.bind(this);
    let currentNumDay = new Date().getDay();
    currentNumDay = (currentNumDay - 1 == -1) ? 6 : currentNumDay - 1; 
    const cx = cn.bind(classes);
    console.log(currentNumDay, numberDayWeek) 
    return (
      <Paper className={ cx({ card: true, _active: currentNumDay === numberDayWeek }) }>
        <Typography variant="title" className={classes.cardHeader}>
          {(currentNumDay === numberDayWeek) ? `${DAYS_WEEK[numberDayWeek]}, cегодня` 
                                             : DAYS_WEEK[numberDayWeek]}
        </Typography>
        { 
          (!meetingsOnDay.length) 
            ? <EmptyDay key={numberDayWeek} />
            : <List dense={false}>
              {
                meetingsOnDay.map( (meeting) => <Meeting key={meeting.Id} {...meeting} />)
              }
              </List>
        }
        <div className={classes.cardFooter}>
          <Button variant="contained" color="primary" value={`/views/${numberDayWeek}`} onClick={this.handleClick}>
            перейти
          </Button>   
        </div>
      </Paper>
    );
  }

  // Встреча
  renderMeeting = (props: IMeetingTable) => (
    <ListItem divider>
      <ListItemText>
        <Typography variant="subtitle2" gutterBottom>
          {props.TimeStart.split(' ')[1] + '-' + props.TimeEnd.split(' ')[1]} 
        </Typography>
        {props.Title}
      </ListItemText>
    </ListItem>
  );

  renderEmptyDay = () => (
    <React.Fragment>
      <div className={classes.cardEmpty}>
        <Typography variant="subheading">На этот день встреч не запланировано</Typography>
      </div>
      <Divider light />
    </React.Fragment>
  );

  handleClick = (event) => {
    const { history } = this.props;
    history.push(event.currentTarget.value);
  };
}

export default withRouter(ShortSimpleDay); 

  