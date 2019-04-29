import * as React from 'react';
import { Provider } from 'mobx-react'
import AppBarStore from './stores/app-bar';
import LoaderStore from './stores/loader';
import UserStore from './stores/user-store';
import Routers from './router';

const store = {...AppBarStore, ...LoaderStore, ...UserStore}

const App = () => (
  <Provider 
      appBarStore={AppBarStore}  
      loaderStore={LoaderStore}
      userStore={UserStore}
  >
    <Routers />
  </Provider>
)

export default App;