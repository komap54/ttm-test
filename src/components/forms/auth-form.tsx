import * as React from 'react';
import { inject } from 'mobx-react';
import { RouteComponentProps, withRouter } from "react-router-dom";
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as classes from './style.css';
import { Typography } from '@material-ui/core';

@inject('userStore')
class FormAuth extends React.Component<RouteComponentProps & any, any> {
  state = {
      login: '',
      pass: ''
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="title" align="center">{'Авторизация'}</Typography>
        <form onSubmit={this.handleSumbit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Логин</InputLabel>
            <Input id="my-input" aria-describedby="Логин" onChange={(_) => this.setState({login: _.target.value})} value={this.state.login} />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Пароль</InputLabel>
            <Input id="my-input" aria-describedby="Пароль" onChange={(_) => this.setState({pass: _.target.value})} value={this.state.pass}/>
          </FormControl>
          <div className={classes.formFooter}>
            <Button variant="contained" size="large" color="primary" type="submit">
              Войти
            </Button>
            <Typography variant="body1" className={classes.formFooterTextAuth}>
              {'или '}
              <Link to="/register">
                {'зарегистрироваться'}
              </Link>
            </Typography>
          </div>
        </form>
      </React.Fragment>
    );
  }

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.history.push('/');
    this.props.userStore.setIsLogin();
  }
}

export default withRouter(FormAuth)