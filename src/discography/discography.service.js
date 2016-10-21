import firebase from 'firebase';
import {firebaseConfig} from '../core';

class DiscographyService{

    constructor(){
        firebase.initializeApp(firebaseConfig); //this will be moved to auth
    }

    fetchReleasesForArtst(artist){
        return firebase.database().ref('/artists/'+artist+'/releases')
            .once('value')
            .then(function(snapshot){
                return snapshot.val();
            });
    }
}

let discographyService = new DiscographyService();

export default discographyService;
