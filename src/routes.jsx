import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import {Shell} from './shell';
import {ClockPage} from './clock';
import {GithubPage} from './github';

export let routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={GithubPage}/>
        <Route path="clock" component={ClockPage}/>
        <Redirect from="*" to="/"/>
    </Route>
);
