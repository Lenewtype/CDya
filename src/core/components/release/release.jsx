import React from 'react';
import style from './release.css';

export default class Release extends React.Component {
    
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className={ style.release }>
                <h2>Release</h2>
                <h2>Release Title</h2>
                <h5>Release Title Romaji</h5>
                <div className = {style.releaseContainer}>
                    <div className = {style.releaseContent}>
                        <div className= {style.releaseSubHeaders}>
                            <span className={style.releaseSubHeadersBold}>Date:</span>
                            <span>01/03/2014</span>
                            <span className={style.releaseSubHeadersBold}>Price:</span>
                            <span>1,400 yen</span>
                            <span className={style.releaseSubHeadersBold}>Serial:</span>
                            <span>MT-2001</span>
                            <span className={style.releaseSubHeadersBold}>Type:</span>
                            <span>最高盤 CD + DVD 
                                <span className="romaji"> (Saikouban CD + DVD)</span>
                            </span>
                        </div>
                    </div>
                    <div className={style.releaseImage}>
                    </div>
                </div>
            </div>
        );
    }
}

