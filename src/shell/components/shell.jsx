import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {observer} from 'mobx-react';

@observer(['store'])
export default class Shell extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
    }
    openDrawer(){

    }

    render() {
        return (
            <div>
                <AppBar title={'CD屋'}></AppBar>

                {this.props.children}
            </div>
        );
    }
}
