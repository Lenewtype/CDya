import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {store} from './store';
import {App} from './app';

// Styles
import 'sanitize.css/sanitize.css';
import './assets/styles/styles.css';

// Avoid iOS's 300ms tap delay by injecting TapEventPlugin
injectTapEventPlugin();

ReactDOM.render(<App store={store} history={browserHistory}/>,
    document.querySelector('main'));
