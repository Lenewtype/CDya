import React from 'react';
import {observer} from 'mobx-react';
import AppBar from 'material-ui/AppBar';
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

        let releaseCollection = [
            {
                id: 'rwewfw3rfvb4f',
                name: '泣いているエッグプラント',
                nameRomaji: 'Naiteiru EGGPLANT',
                releaseDate: 1388797518648,
                price: '1,400 yen',
                serialNumber: 'MT-2001',
                type: 'CD + DVD',
                customType: '最高盤',
                customTypeRomaji: 'Saikouban',
                isOmnibus: false,
                artist: 'チェリーヴァン',
                artistRomaji: 'Cherry Vin',
                discs:{
                    disc1: {
                        type: 'CD',
                        discNum: 1,
                        tracks: {
                            track1: {
                                name: '〜Garden Song (SE)〜',
                                order: 1
                            },
                            track2: {
                                name: '泣いているエッグプラント',
                                nameRomaji: 'Naiteiru EGGPLANT',
                                order: 2
                            },
                            track3: {
                                name: 'BANG!!',
                                order: 3
                            }
                        }
                    },
                    disc2: {
                        type: 'DVD',
                        discNum: 2,
                        tracks:{
                            track1: {
                                name: '泣いているエッグプラント',
                                nameRomaji: 'Naiteiru EGGPLANT',
                                order: 1
                            }
                        }
                    }
                }
            },
            {
                id: 'eir42gw',
                name: 'Valuable Exchange -Innovation-',
                releaseDate: 1428120000000,
                price: '3,000 yen',
                serialNumber: 'RTT-11',
                type: 'CD ',
                isOmnibus: true,
                discs:{
                    disc1: {
                        type: 'CD',
                        discNum: 1,
                        tracks: {
                            track1: {
                                name: 'Phase 0',
                                artistName: 'FaLloW',
                                order: 1
                            },
                            track2: {
                                name: 'スキップ、スキップ！！',
                                nameRomaji: 'SKIP, SKIP!!',
                                artistName: 'チェリーヴァン',
                                artistNameRomaji: 'Cherry Vin',
                                order: 2
                            },
                            track3: {
                                name: 'Breakerxxxxxx',
                                order: 3,
                                artistName: 'Pulse'
                            }
                        }
                    }
                }
            }
        ];

        return(
            <div>
                <AppBar title={'Test'}></AppBar>
                <Tabs>
                    <Tab label="Item One" >
                    </Tab>
                    <Tab label="Item Two" >
                    </Tab>
                    <Tab label="Item Three" >
                    </Tab>
                </Tabs>
                <div className={style.home}>
                    <RaisedButton primary={true} label="Primary"/>
                    <RaisedButton secondary={true} label="Secondary"/>
                    <RaisedButton label="Default"/>
                    <FloatingActionButton secondary={true} >
                      <ContentAdd />
                    </FloatingActionButton>

                    <FloatingActionButton mini={true} secondary={true}>
                      <ContentAdd />
                    </FloatingActionButton>

                    <FloatingActionButton backgroundColor={tertiaryColor} >
                      <ContentAdd />
                    </FloatingActionButton>

                    <FloatingActionButton mini={true} backgroundColor={tertiaryColor}>
                      <ContentAdd />
                    </FloatingActionButton>
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
