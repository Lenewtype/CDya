import {computed, observable} from 'mobx';

export class HomeStore {
    @observable date = new Date();

    @computed get time() {
        return this.date.toString();
    }

    init() {
        // prepare the store
    }
}
