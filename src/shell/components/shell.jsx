import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Close from 'material-ui/svg-icons/navigation/close';
import {observer} from 'mobx-react';
import {browserHistory} from 'react-router';

@observer(['store'])
export default class Shell extends React.Component {

    constructor(props){
        super(props);
    }
    toggleDrawer(){
        this.props.store.toggleMenu();
    }

    goToPage(page){
        browserHistory.push(page);
        this.toggleDrawer();
    }

    render() {
        let topItemStyles = {
            backgroundColor: '#242424',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '23px',
            padding: '6px 0px',
            cursor: 'pointer'
        };
        let closeStyle={
            fill: 'white',
            top: '11px',
            right: '10px',
            position: 'absolute',
            height: '27px',
            width: '27px'
        };
        return (
            <div>
                <AppBar title={'CD屋'}
                    onLeftIconButtonTouchTap={
                        () => {this.toggleDrawer();}
                }></AppBar>

                {this.props.children}

                <Drawer className="menu" open={this.props.store.menuOpen}>
                    <MenuItem onClick={() => this.toggleDrawer()}
                        style={topItemStyles}>CD屋 <Close style={closeStyle}/></MenuItem>
                    <MenuItem className="menuItem" onClick={ () => this.goToPage('/')}>Home</MenuItem>
                    <MenuItem className="menuItem" onClick={ () => this.goToPage('/discography')}>Discography</MenuItem>
                </Drawer>
            </div>
        );
    }
}
