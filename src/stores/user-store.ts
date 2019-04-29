import * as Mobx from 'mobx';
import * as API from '../api/api';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class UserStore {
  @Mobx.observable private auth: boolean;
  private name: string;
  private surname: string;
  private id: number;
  private api: typeof API;

  constructor() {
    this.api = API;
    this.auth = false;
  }

  private checkAuth() {
    this.api.getUser()
      .then(r => {
        console.log('s' + r)
      })
      .catch(e => {
        console.log('e' + e);
      });
    
    //return true;
  }

  @Mobx.computed
  public get isLogin(): boolean {
    return this.auth;
  } 

  @Mobx.action.bound
  public setIsLogin(): void {
    this.auth = !this.auth;
  }
}

const userStore = new UserStore();
export {
  userStore,
};
export default userStore;