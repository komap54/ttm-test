import * as Mobx from 'mobx'; 

class AppBarStore {
    @Mobx.observable public title = '';
    @Mobx.observable public backButton = false;
    @Mobx.observable public showMenu = false;

    @Mobx.action.bound
    public setTitle(v : string) {
      this.title = v;
    }
    
    @Mobx.action
    public set BackButton(v : boolean) {
      this.backButton = v;
    }

    @Mobx.action.bound
    public toggleMenu(state : boolean) {
      this.showMenu = state;
      console.log(this, state, this.showMenu);
    }
}

const appBarStore = new AppBarStore();

export default appBarStore;
export {
  appBarStore
}