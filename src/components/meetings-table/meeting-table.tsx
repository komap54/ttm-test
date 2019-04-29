import * as React from 'react';
import SimpleDay from './short-simple-day';
import { inject,  observer } from 'mobx-react';
import * as classes from './style.css';

export default class ListMeetings extends React.Component<any, any> {
  render() {
    const { meetings } = this.props;
    const Column = [];
    for (let i = 0; i < meetings.length; i++) {
      Column.push(<li key={i}><SimpleDay meetingsOnDay={meetings[i]} numberDayWeek={i} /></li>);
    }

    return (
      <ul className={classes.cardList} style={{...this.props.style}}>
        {Column}
      </ul>
    );
  }
}