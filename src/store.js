import {DiscographyStore} from './discography/discography.store';
import {observable, action} from 'mobx';
//import authService from './auth/auth.service';

class Store {
    title = 'CD屋';

    discography = new DiscographyStore();

    @observable menuOpen = false;

    init() {
        this.discography.init();

        this.discography.fetchReleasesForArtst('a2342');
    }

    @action toggleMenu(){
        this.menuOpen = !this.menuOpen;
    }
}

const store = new Store();
store.init();
export {store};
