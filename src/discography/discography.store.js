import {observable} from 'mobx';

export class DiscographyStore {
    

    init() {
        // prepare the store
    }

    @observable currentBand = '';
    @observable discographyListing = [
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
            type: 'Omnibus CD',
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

}
