import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import {Shell} from './shell';
//import {ClockPage} from './clock';
import {Home} from './home';

export let routes = (
    <Route path="/" component={Shell}>
        <IndexRoute component={Home}/>
        {/*<Route path="clock" component={ClockPage}/>*/}
        <Redirect from="*" to="/"/>
    </Route>
);
