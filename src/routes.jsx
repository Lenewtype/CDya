import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import {Shell} from './shell';
import {Releases} from './discography';
import {DiscographyPage} from './discography';
import {Home} from './home';

export let routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={Home}/>
        <Route path="/discography" component={DiscographyPage}/>
        <Route path="/releases/:bandId" component={Releases}/>
        <Redirect from="*" to="/"/>
    </Route>
);
