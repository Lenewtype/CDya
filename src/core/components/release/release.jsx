import React from 'react';
import style from './release.css';
import Paper from 'material-ui/Paper';
import {deepOrangeA400} from 'material-ui/styles/colors';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import Launch from 'material-ui/svg-icons/action/launch';
import dateUtil from '../../utils/dateUtil';

export default class Release extends React.Component {
    
    constructor(props){
        super(props);
    }

    createDiscTemplate(item){

        let releaseTitleStyle = {
            fontSize: '16px',
            position: 'relative',
            marginTop: '15px',
            marginLeft: '18px',
            color: (this.props.omni)? '#7BD11F' : deepOrangeA400
        };
        let playArrowStyle = {
            height: '17px',
            width: '17px',
            color: (this.props.omni)? '#7BD11F' : deepOrangeA400,
            position: 'relative',
            top: '-2px'
        };
        let accountStyles = {
            height: '16px',
            width: '16px',
            marginTop: '-2px',
            marginLeft: '4px',
            color: 'white'
        };

        return(
            Object.keys(item.discs).map( (disc, index) => {
                let aDisc = item.discs[disc];
                return (
                    <div key={index}>
                        {
                            (Object.keys(item.discs).length > 1)?(<div key={aDisc.discNum} className={style.releaseSubHeadersBold} style={releaseTitleStyle}>
                                <PlayArrow style={playArrowStyle}/> {aDisc.type}
                            </div>) : <div className="spacer"></div>
                        }
                        <ol>
                            {
                                Object.keys(aDisc.tracks).map(track =>{
                                    let aTrack = aDisc.tracks[track];
                                    return (<li key={aTrack.order}>
                                        {(() =>{
                                            if(aTrack.nameRomaji && this.props.omni){
                                                return (<span> <span className={style.trackArtist}>{aTrack.artistNameRomaji} <AccountCircle style={accountStyles}/></span> {aTrack.name} <br/> <span className="romaji  romaji--release">{aTrack.artistNameRomaji}: {aTrack.nameRomaji}</span></span>); 
                                            }
                                            else if(aTrack.nameRomaji && !this.props.omni){
                                                return (<span>{aTrack.name} <br/> <span className="romaji  romaji--release">{aTrack.nameRomaji}</span></span>);
                                            }
                                            else if(this.props.omni){
                                                return (<span> <span className={style.trackArtist}>{aTrack.artistName}  <AccountCircle style={accountStyles}/></span> {aTrack.name}</span>);
                                            }
                                            else{
                                                return (<span>{aTrack.name}</span>);
                                            }
                                        })()}
                                    </li>);
                                })
                            }
                        </ol>
                    </div>
                );
            })
        );
    }


    render(){
        
        let item = this.props.item;
        let titleStyles = {
            color: (this.props.omni)? '#79CF21' : deepOrangeA400,
            fontSize: '24px'
        };
        let paperStyle = {
            display: 'flex',
            width: '100%',
            backgroundColor: '#262626',
            borderTop: '5px solid #FF5722',
            borderTopColor: (this.props.omni)? '#79CF21' : deepOrangeA400
        };
        
        let releaseSubHeadersStyle = {
            fontWeight: '600',
            marginRight: '6px',
            color: (this.props.omni)? '#88EA24' : deepOrangeA400
        };
        let allDetailsLinkSTyle = {
            color: (this.props.omni)? '#7BD11F' : deepOrangeA400,
            textTransform: 'uppercase',
            fontSize: '13px',
            position: 'relative',
            marginLeft: '8px',
            paddingBottom: '12px',
            cursor: 'pointer',
            width: '135px'

        };
        let launchStyles = { 
            color: (this.props.omni)? '#79CF21' : deepOrangeA400, 
            marginTop: '-4px',
            height: '18px',
            width: '18px'
        };
        return (
            <div className={ style.release }>
                <h2 style={titleStyles}>{item.name}</h2>
                <h5>{item.nameRomaji}</h5>
                <Paper className = {style.releaseContainer} style={paperStyle}>
                    <div className = {style.releaseContent}>
                        <div className= {style.releaseSubHeaders}>
                            <span style={releaseSubHeadersStyle}>Date:</span>
                            <span className= {style.releaseSubHeader}>{dateUtil(item.releaseDate)}</span>
                            <span style={releaseSubHeadersStyle}>Price:</span>
                            <span className= {style.releaseSubHeader}>{item.price}</span>
                            <span style={releaseSubHeadersStyle}>Serial:</span>
                            <span className= {style.releaseSubHeader}>{item.serialNumber}</span>
                            <span style={releaseSubHeadersStyle}>Type:</span>
                            <span className= {style.releaseSubHeader}>
                                {
                                    (item.customType)? `${item.customType} ${item.type}` : `${item.type}`
                                }
                                {
                                    (item.customTypeRomaji)?
                                        <span className="romaji"> ({item.customTypeRomaji} {item.type})</span>:''
                                }
                            </span>
                        </div>
                        { this.createDiscTemplate(item)}
                        <div className={style.releaseViewAll} style={allDetailsLinkSTyle}>
                            <Launch style={launchStyles}/> View All Details
                        </div>
                    </div>
                    <div className={style.releaseImageContainer}>
                        <div className={style.releaseImage}></div>
                    </div>
                </Paper>
            </div>
        );
    }
}

