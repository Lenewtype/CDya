import React from 'react';
import {Router} from 'react-router';
import {observer, Provider} from 'mobx-react';
import {routes} from '../../routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Customize MuiTheme by overriding the getMuiTheme() values
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {
    grey900, grey400, grey700,
    yellow300, deepOrangeA400, orange600
} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: grey900,
        primary2Color: grey400,
        primary3Color: grey700,
        accent1Color: deepOrangeA400,
        accent2Color: orange600,
        accent3Color: yellow300
    }
});

export default observer(['store'], function App({store, history}) {

    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <Router history={history}>
                        {routes}
                </Router>
            </Provider>
        </MuiThemeProvider>
    );

});
