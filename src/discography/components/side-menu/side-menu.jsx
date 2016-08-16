import React from 'react';

import style from './side-menu.css';

export default function SideMenu({img}) {
    return (
        <div className={ style.sideMenu }>
            <div className={style.discographyImage}>
                <img src={img}/>
            </div>
            <div className={style.sideMenuWrap}>
                <p>Select an Artist</p>
                <ul className={style.sideMenuList}>
                    <li>Artist 1</li>
                    <li>Artist 2</li>
                    <li>Artist 3</li>
                    <li>Artist 4</li>
                    <li>Artist 5</li>
                    <li>Artist 6</li>
                    <li>Artist 777777777777</li>
                    <li>Artist 8</li>
                    <li>Artist 9</li>
                </ul>
            </div>
        </div>
    );
}

