import * as Mobx from 'mobx';

class LoaderStore {
  @Mobx.observable private show = false;

  @Mobx.action
  public setVisible() {
    this.show = true;
  }

  @Mobx.action
  public setHidden() {
    this.show = false;
  }
}

const loaderStore = new LoaderStore();

export default loaderStore;
export {
  loaderStore
}