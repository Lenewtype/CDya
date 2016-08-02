import React from 'react';
import {observer, inject} from 'mobx-react';

import style from './home.css';

@inject('store')
@observer
export default class Home extends React.Component {

    static defaultProps = {
        type: '',
    };

    static propTypes = {
        type: React.PropTypes.string,
    };

    render() {
        return (
            <div className={ style.home }>
                <h2>Home</h2>
            </div>
        );
    }

}
