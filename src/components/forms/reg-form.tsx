import * as React from 'react';
import { inject } from 'mobx-react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import * as classes from './style.css';
import { Typography } from '@material-ui/core';

@inject('userStore')
export default class FormRegister extends React.Component<any, any> {
  state = {
      login: '',
      pass: '',
      doublepass: '',
      name: '',
      surname: '',
      email: '',
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="title" align="center">{'Регистрация'}</Typography>
        <form onSubmit={this.handleSumbit}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Логин</InputLabel>
            <Input id="my-input" aria-describedby="Логин" onChange={(_) => this.setState({login: _.target.value})} value={this.state.login} />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">E-mail</InputLabel>
            <Input id="my-input" aria-describedby="Пароль" onChange={(_) => this.setState({email: _.target.value})} value={this.state.email}/>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Пароль</InputLabel>
            <Input id="my-input" aria-describedby="Пароль" onChange={(_) => this.setState({pass: _.target.value})} value={this.state.pass}/>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Повторите пароль</InputLabel>
            <Input id="my-input" aria-describedby="Повтор пароля" onChange={(_) => this.setState({doublepass: _.target.value})} value={this.state.doublepass}/>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Имя</InputLabel>
            <Input id="my-input" aria-describedby="Пароль" onChange={(_) => this.setState({name: _.target.value})} value={this.state.name}/>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="my-input">Фамилия</InputLabel>
            <Input id="my-input" aria-describedby="Пароль" onChange={(_) => this.setState({surname: _.target.value})} value={this.state.surname}/>
          </FormControl>
          <div className={classes.formFooter}>
            <Typography variant="body1" className={classes.formFooterTextReg}>
              {'Уже есть аккаунт? '}
              <Link to="/">
                {'Войти!'}
              </Link>
            </Typography>
            <Button variant="contained" size="large" color="primary" type="submit">
              Зарегистрироваться
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }

  handleSumbit = (e) => {
    e.preventDefault();
    this.props.userStore.setIsLogin();
  }
}
