import * as React from 'react';
import { 
  Paper,
  Typography,
  List,
  Link,
} from '@material-ui/core';

import { IMeetingTable } from '../../stores/types';
import Meeting from './meeting';
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

const MONTH = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября',
  'Декабря'
];

export interface IPropsSimpleDay {
  meetingsOnDay: IMeetingTable[],
  day: number,
}

export default class SimpleDay extends React.Component<IPropsSimpleDay & any, any> {
  render() {
    const { meetingsOnDay, day} = this.props;
    const DayWeek = this.getNameWeek(+day + 1);
    const EmptyDay = this.renderEmptyDay.bind(this);
    return (
      <Paper className={classes.day}>
        <div className={classes.dayHeader}>
          <Typography variant="headline">{DayWeek}</Typography>
        </div>
        { 
          (!meetingsOnDay.length) 
            ? <EmptyDay />
            : <List dense>
              {
                meetingsOnDay.map( (meeting) => <Meeting key={meeting.Id} {...meeting} />)
              }
              </List>
        }
      </Paper>
    );
  }

  // Встреч нет
  renderEmptyDay() {
    const dudUrl = 'javascript:;';
    return (
      <div>
        <Typography paragraph>
          День пуст. <Link href={dudUrl} variant="body1">Добавить</Link>
        </Typography>
      </div>
    );
  }

  getNameWeek(day: number): string {
    const secInday = 86440;
    const now = new Date();
    const nowInSec = now.getTime() / 1000;
    let needDay: any = (now.getDay() <= day) ? nowInSec + secInday * (day - now.getDay()) 
                                            : nowInSec - secInday * (now.getDay() - day);
    needDay = new Date(needDay * 1000);
    let result = DAYS_WEEK[needDay.getDay() - 1] + ', ' + needDay.getDate() + ' ' + MONTH[needDay.getMonth()];
    result += (+now.getDay() === day) ? ', сегодня' : ''; 

    return result;
  }
}
