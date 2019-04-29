import * as React from 'react';
import AppTopBar from '../../components/top-bar';
import SideMenu from '../../components/drawer';
import BottomNav from '../../components/bottom-nav/bottom-nav';
import {BrowserRouter} from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import * as styles from './app.css';

const items = [
  'item1',
  'item2',
  'item3'
];

interface ITemplate {
  children: React.ReactNode
}

const Template = (props: ITemplate) => {
  return (
      <div className={styles.app}>
        <CssBaseline />
        <AppTopBar />
        <SideMenu items={items} direction="left" />
        <div className={styles.content}>
          {props.children}
        </div>
        <BottomNav />
      </div>
  );
} 

export default Template;