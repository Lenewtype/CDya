/*import {ClockStore} from './clock/clock.store';
import {GithubStore} from './github/github.store';*/
import {DiscographyStore} from './discography/discography.store';

class Store {
    title = 'CD屋';

    discography = new DiscographyStore();
    init() {
        /*this.github.init();
        this.clock.init();*/

        this.discography.init();
    }
}

const store = new Store();
store.init();
export {store};
