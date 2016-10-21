import {observable, computed, action} from 'mobx';
import discographyService from './discography.service';


export class DiscographyStore {
    
    @observable discographyMapping = {};

    @observable currentBand = {
        id: 2342,
        name: 'チェリーヴァン',
        nameRomaji: 'Cherry Vin',
        defaultPic: 'http://img2-ak.lst.fm/i/u/770x0/fc2c6b8656df0af7b1b1bd5f93df7729.jpg'
    };

    constructor() {
        this.fetchReleasesForArtst = this.fetchReleasesForArtst.bind(this);
    }

    init(){
        // prepare the store
    }

    @action
    fetchReleasesForArtst(artist){
        return discographyService.fetchReleasesForArtst(artist)
            .then(releases => {
                this.discographyMapping = releases;
                return releases;
            });
    }

    @computed get releases(){
        return Object.keys(this.discographyMapping).map( id => {
            return {id, ...this.discographyMapping[id]};
        });
    }

}
