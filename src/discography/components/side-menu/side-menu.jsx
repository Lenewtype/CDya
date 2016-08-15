import React from 'react';

import style from './side-menu.css';

export default function SideMenu(props) {
    props.shh = '';
    return (
        <div className={ style.sideMenu }>
            <h2>SideMenu</h2>
        </div>
    );
}

