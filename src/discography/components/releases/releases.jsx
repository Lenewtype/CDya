import React from 'react';
import {observer} from 'mobx-react';
import {SideMenu} from '../side-menu';
import Release from '../../../core/components/release/release';

import style from './releases.css';

@observer(['store'])
export default class Releases extends React.Component {

    constructor(props){
        super(props);
        console.log('Releases');
        const {discography} = this.props.store;
        this.currentBand = discography.currentBand;
        this.releases = discography.releases;
    }

    init(){

    }

    componentDidMount(){
        console.log('did mount');
    }

    renderBandTitle(){
        if(this.currentBand.nameRomaji){
            return ( 
                <div>
                    <h1 className={style.bandName}>{this.currentBand.nameRomaji}</h1>
                    <h4 className={style.bandName}>{this.currentBand.name}</h4>
                </div>
            );
        }
        else{
            return ( <h1 className={style.bandName}>{this.currentBand.name}</h1>);
        }
    }


    render() {
        return (
            <div className={ style.releases }>
                <div className={style.releasesWrap}>
                    <SideMenu className={style.releasesSideMenu} img={this.currentBand.defaultPic}/>
                    <div className={style.releasesList}>
                        <div className={style.bandNav}>
                            {this.renderBandTitle()}
                        </div>
                        {
                            this.releases.map( release => 
                                <Release key={release.id} item={release} omni={release.isOmnibus}/>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

}
