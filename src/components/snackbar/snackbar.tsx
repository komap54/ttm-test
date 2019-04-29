import * as React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, withSnackbar } from 'notistack';

class App extends React.Component<any, any> {
  handleClick = () => {
    this.props.enqueueSnackbar('I love snacks.');
  };

  handleClickVariant = variant => () => {
    // variant could be success, error, warning or info
    this.props.enqueueSnackbar('This is a warning message!', { variant });
  };

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleClick}>Show snackbar</Button>
        <Button onClick={this.handleClickVariant('warning')}>Show warning snackbar</Button>
      </React.Fragment>
    );
  }
}

const MyApp = withSnackbar(App);

function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp />
    </SnackbarProvider>
  );
}

export default IntegrationNotistack;