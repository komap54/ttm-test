import * as React from 'react';
import { inject, observer } from 'mobx-react'
import Drawer from './drawer';

const DrawerContainer = inject('appBarStore')(observer((props) => {
  const { showMenu, toggleMenu } = props.appBarStore;
  const Items = ['Coming', 'soon'];
  return <Drawer items={Items} open={showMenu} toggleDrawer={toggleMenu} />
})); 

export default DrawerContainer;