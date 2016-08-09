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
    }    


    render() {
        return (
            <div className={ style.discography }>
                <h2>Discography</h2>
                <p>Artist picture will go here</p>
                <div className={style.discographyWrap}>
                    <SideMenu className={style.discographySideMenu}/>
                    <div className={style.discographyList}>
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
