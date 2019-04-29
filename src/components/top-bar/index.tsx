import * as React from 'react';
import AppBar from './top-bar';
import {
  inject,
  observer
} from 'mobx-react'

const AppBarContainer = inject('appBarStore')(observer(props => {
  console.log(props);
  const { title, backButton, toggleMenu} = props.appBarStore;
  return <AppBar title={title} visibleBackButton={backButton} handleMenuToggle={toggleMenu}/>
}));  

export default AppBarContainer;