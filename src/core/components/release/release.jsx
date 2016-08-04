import React from 'react';
import style from './release.css';
import Paper from 'material-ui/Paper';
import {deepOrangeA400} from 'material-ui/styles/colors';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';

export default class Release extends React.Component {
    
    constructor(props){
        super(props);
    }


    render(){
        let titleStyles = {
            color: deepOrangeA400,
            fontSize: '24px'
        };
        let paperStyle = {
            display: 'flex',
            width: '100%',
            backgroundColor: '#262626',
            borderTop: '5px solid #FF5722'
        };
        let releaseTitleStyle = {
            fontSize: '16px',
            position: 'relative',
            marginTop: '15px',
            marginLeft: '18px'
        }
        let playArrowStyle = {
            height: '17px',
            width: '17px',
            color: deepOrangeA400,
            position: 'relative',
            top: '-2px'
        };
        return (
            <div className={ style.release }>
                <h2 style={titleStyles}>泣いているエッグプラント</h2>
                <h5>Naiteiru EGGPLANT</h5>
                <Paper className = {style.releaseContainer} style={paperStyle}>
                    <div className = {style.releaseContent}>
                        <div className= {style.releaseSubHeaders}>
                            <span className={style.releaseSubHeadersBold}>Date:</span>
                            <span className= {style.releaseSubHeader}>01/03/2014</span>
                            <span className={style.releaseSubHeadersBold}>Price:</span>
                            <span className= {style.releaseSubHeader}>1,400 yen</span>
                            <span className={style.releaseSubHeadersBold}>Serial:</span>
                            <span className= {style.releaseSubHeader}>MT-2001</span>
                            <span className={style.releaseSubHeadersBold}>Type:</span>
                            <span className= {style.releaseSubHeader}>最高盤 CD + DVD 
                                <span className="romaji"> (Saikouban CD + DVD)</span>
                            </span>
                        </div>
                        <div className={style.releaseSubHeadersBold} style={releaseTitleStyle}>
                            <PlayArrow style={playArrowStyle}/> CD
                        </div>
                        <ol>
                            <li>〜Garden Song (SE)〜</li>
                            <li>泣いているエッグプラント <br/> <span className="romaji  romaji--release">Naiteiru EGGPLANT</span></li>
                            <li>BANG!!</li>
                        </ol>
                        <div className={style.releaseSubHeadersBold} style={releaseTitleStyle}>
                            <PlayArrow style={playArrowStyle}/> DVD
                        </div>
                        <ol>
                            <li>泣いているエッグプラント (Music Video) <br/> <span className="romaji  romaji--release">Naiteiru EGGPLANT</span></li>
                        </ol>
                    </div>
                    <div className={style.releaseImageContainer}>
                        <div className={style.releaseImage}></div>
                    </div>
                </Paper>
            </div>
        );
    }
}

