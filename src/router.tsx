import * as React from 'react';
import {
  Route,
  Redirect,
  BrowserRouter,
  Switch,
  } from 'react-router-dom';

import { observer, inject } from 'mobx-react'
import {
  FormRegister,
  FormAuth
} from './components/forms';
import CurrentWeekTable from './components/meetings-table';
import SimpleDay from './components/simple-day';
import TemplateUser from './views/template-user';
import TemplateGuest from './views/template-guest';
import { Typography } from '@material-ui/core';

interface IPrivateRoute {
  isLoggedIn: boolean,
  component: any,
  path?: string,
  toGo?: string,
  exact?: boolean, 
}

const PrivateRoute = (props: IPrivateRoute) => {
  const { isLoggedIn, component: Component, path, toGo, exact } = props;
  
  return (<Route
    path={path}
    exact={exact}
    component={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: toGo, state: {from: props.location}}} />
      )
    }
  />)
}

const WrapperTemplate = (Component, Template) => (
  <Template>
    <Component />
  </Template>
)

const RedirectToApp = (props) => (
  <Redirect to="/" from={props.localtion} /> 
)

const App = (props) => (
  <Route>
  
  </Route>
);

const router = inject('userStore')(observer( ({userStore}) => {
  const isLogin = userStore.isLogin;
  return  (
    <BrowserRouter>  
      <PrivateRoute isLoggedIn={isLogin} toGo="/login" exact path='/' component={() => WrapperTemplate(CurrentWeekTable, TemplateUser)} /> 
      <PrivateRoute isLoggedIn={isLogin} toGo="/login" exact path='/views/:day' component={() => WrapperTemplate(SimpleDay, TemplateUser)} /> 
      <PrivateRoute isLoggedIn={isLogin} toGo="/login" exact path='/template' component={() => WrapperTemplate(CurrentWeekTable, TemplateUser)} />
      <Route exact path='/login' component={() => WrapperTemplate(FormAuth, TemplateGuest)} />
      <Route exact path='/register' component={() => WrapperTemplate(FormRegister, TemplateGuest)} />
    </BrowserRouter>
  )
})); 

export default router;
