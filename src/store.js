/*import {ClockStore} from './clock/clock.store';
import {GithubStore} from './github/github.store';*/

class Store {
    title = 'React MobX Seed';


    init() {
        /*this.github.init();
        this.clock.init();*/
    }
}

const store = new Store();
store.init();
export {store};
