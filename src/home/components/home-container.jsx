import React from 'react';
import {observer} from 'mobx-react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Tabs, Tab} from 'material-ui/Tabs';
import Release from '../../core/components/release/release';
//import Home from './home';

@observer(['store'])
export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log(Release);
    }

    render(){
        let tertiaryColor = '#88EA24';

        return(
            <div>
                <AppBar title={'Test'}></AppBar>
                <Tabs>
                    <Tab label="Item One" >
                    </Tab>
                    <Tab label="Item Two" >
                    </Tab>
                    <Tab label="Item Three" >
                    </Tab>
                </Tabs>
                <RaisedButton primary={true} label="Primary"/>
                <RaisedButton secondary={true} label="Secondary"/>
                <RaisedButton label="Default"/>
                <FloatingActionButton secondary={true} >
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton mini={true} secondary={true}>
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton backgroundColor={tertiaryColor} >
                  <ContentAdd />
                </FloatingActionButton>

                <FloatingActionButton mini={true} backgroundColor={tertiaryColor}>
                  <ContentAdd />
                </FloatingActionButton>
                <Release/>
            </div>
        );
    }
}
