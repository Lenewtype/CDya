import React from 'react';
import {observer} from 'mobx-react';
import {SideMenu} from './side-menu';
import Release from '../../core/components/release/release';
import style from './discography.css';

@observer(['store'])
export default class DiscographyPage extends React.Component {

    constructor(props){
        super(props);
        const {discography} = this.props.store;
        this.currentBand = discography.currentBand;
        this.releases = discography.releases;
    }

    init(){

    }

    render(){
        return (<h3>Discography</h3>);
    }

}
