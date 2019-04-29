import * as React from 'react';
import {observable, computed} from 'mobx';
import {observer, inject} from 'mobx-react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as classes from './drawer.css'

export interface Props {
  items: any[],
  toggleDrawer: Function,
  open: boolean
}

const SwipeableTemporaryDrawer = (props: Props) => {
  const { items, toggleDrawer, open } = props;
  console.log(props)
  const sideList = (
    <div className={classes.list}>
      <List>
        {items.map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <SwipeableDrawer
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          {sideList}
        </div>
      </SwipeableDrawer>
    </div>
  );
}

export default SwipeableTemporaryDrawer;