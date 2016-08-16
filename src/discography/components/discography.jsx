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
        this.discography = discography.discographyListing;
        this.currentBand = discography.currentBand;
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
            <div className={ style.discography }>
                <div className={style.discographyWrap}>
                    <SideMenu className={style.discographySideMenu} img={this.currentBand.defaultPic}/>
                    <div className={style.discographyList}>
                        <div className={style.bandNav}>
                            {this.renderBandTitle()}
                        </div>
                        {
                            this.discography.map( release => 
                                <Release key={release.id} item={release} omni={release.isOmnibus}/>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

}
