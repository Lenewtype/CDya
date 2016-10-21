import firebase from 'firebase';
import {firebaseConfig} from '../core';

class AuthService{

    constructor(){
       // firebase.initializeApp(firebaseConfig); this will be done here once I work on adding a login
    }

}

let authService = new AuthService();

export default authService;
