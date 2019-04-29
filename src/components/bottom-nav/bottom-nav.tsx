import * as React from 'react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ContactCalendar from '@material-ui/icons/PermContactCalendar';
import ViewWeek from '@material-ui/icons/ViewWeek';
import * as classes from './style.css';
import Icon from '@material-ui/core/Icon';

interface IState {
  value: string
}

class BottomNav extends React.Component<RouteComponentProps, IState> {
  state = {
    value: "/",
  };

  handleChange = (event, value) => {
    const { history } = this.props;
    history.push(value)
    this.setState({value: value})
  };

  render() {
    const { value } = this.state;
    console.log(this.props)
    return (
      <BottomNavigation showLabels value={value} onChange={this.handleChange} className={classes.bottomNav}>
        <BottomNavigationAction value="/" label="Календарь" icon={<ContactCalendar />} />
        <BottomNavigationAction value="/template" label="Расписание" icon={<ViewWeek />} />
      </BottomNavigation>
    );
  }
}

export default withRouter(BottomNav);