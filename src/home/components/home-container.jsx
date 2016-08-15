import React from 'react';
import {observer} from 'mobx-react';
//import Release from '../../core/components/release/release';
import style from './home.css';
//import Home from './home';

@observer(['store'])
export default class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        //let tertiaryColor = '#88EA24';

        return(
            <div>
                
                <div className={style.home}>
                   <h2>Home</h2>
                   <p>This is a work in progress ☆ミ</p>
                </div>
            </div>
        );
    }
}
