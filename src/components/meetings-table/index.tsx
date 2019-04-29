import * as React from 'react';
import MeetingsTable from './meeting-table';
import * as API from '../../api/api';
import { inject, observer } from 'mobx-react'; 

@inject('appBarStore')
class MeetingsTableContainer extends React.Component<any, any> {
  private pending: string = '';

  state = {
    meetings: [],
    errors: []
  }
  
  componentDidMount() {
    API.loadAllMeetings() 
      .then( result => {
        console.log(result);
        this.setState({meetings: result});
      })
  }

  render() {
    const { appBarStore } = this.props;
    appBarStore.setTitle('Календарь');
    return (
      <MeetingsTable meetings={this.state.meetings} />
    )
  }
}

export default MeetingsTableContainer