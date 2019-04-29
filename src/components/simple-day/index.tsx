import * as React from 'react';
import { inject } from 'mobx-react';
import SimpleDayMeetings from './simple-day';
import * as API from '../../api/api';

@inject('appBarStore')
class SimpleDayContainer extends React.Component<any, any> {
  
  state = {
    meetings: [],
    errors: []
  }
  
  componentDidMount() {
    const { day } = this.props.match.params;
    API.loadAllMeetings(day) 
      .then( result => {
        console.log(result);
        this.setState({meetings: result});
      });
  }

  render() {
    const { day } = this.props.match.params;
    const { appBarStore } = this.props;
    appBarStore.setTitle('Расписание дня');
    return(
      <SimpleDayMeetings meetingsOnDay={this.state.meetings} day={day}/>
    )
  }
}

export default SimpleDayContainer