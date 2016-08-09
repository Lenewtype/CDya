import React from 'react';
import {observer} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {Tabs, Tab} from 'material-ui/Tabs';
import Release from '../../core/components/release/release';
import style from './home.css';
//import Home from './home';

@observer(['store'])
export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        let tertiaryColor = '#88EA24';

        return(
            <div>
                
                <div className={style.home}>
                    {
                        releaseCollection.map(  release => 
                            <Release key={release.id} item={release} omni={release.isOmnibus}/>
                        )
                    }
                </div>
            </div>
        );
    }
}
