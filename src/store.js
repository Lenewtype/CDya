import {DiscographyStore} from './discography/discography.store';
import {observable, action} from 'mobx';

class Store {
    title = 'CD屋';

    discography = new DiscographyStore();

    @observable menuOpen = false;

    init() {
        /*this.github.init();
        this.clock.init();*/
        this.discography.init();
    }

    @action toggleMenu(){
        this.menuOpen = !this.menuOpen;
    }
}

const store = new Store();
store.init();
export {store};
