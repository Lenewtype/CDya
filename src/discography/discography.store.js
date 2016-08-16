import {observable} from 'mobx';

export class DiscographyStore {
    

    init() {
        // prepare the store
    }

    @observable currentBand = {
        id: 2342,
        name: 'チェリーヴァン',
        nameRomaji: 'Cherry Vin',
        defaultPic: 'http://img2-ak.lst.fm/i/u/770x0/fc2c6b8656df0af7b1b1bd5f93df7729.jpg'
    };
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
            artistID: 2342,
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
            id: 'rweww3rfvb4f',
            name: '君と僕とりんごとメランコリー',
            nameRomaji: 'Kimi to Boku to Ringo to MELANCHOLY',
            releaseDate: 1425445200000,
            price: '1,550 yen',
            serialNumber: 'MT-2007A',
            version: 'TYPE-A',
            type: 'CD',
            isOmnibus: false,
            artistID: 2342,
            discs:{
                disc1: {
                    type: 'CD',
                    discNum: 1,
                    tracks: {
                        track1: {
                            name: 'Sad',
                            order: 1
                        },
                        track2: {
                            name: 'Kanashimi [ni]',
                            order: 2
                        }
                    }
                }
            }
        },
        {
            id: 'rweww3rfvb4fb',
            name: '君と僕とりんごとメランコリー',
            nameRomaji: 'Kimi to Boku to Ringo to MELANCHOLY',
            releaseDate: 1425445200000,
            price: '1,550 yen',
            serialNumber: 'MT-2007B',
            version: 'TYPE-B',
            type: 'CD',
            isOmnibus: false,
            artistID: 2342,
            discs:{
                disc1: {
                    type: 'CD',
                    discNum: 1,
                    tracks: {
                        track1: {
                            name: 'Sad',
                            order: 1
                        },
                        track2: {
                            name: 'SPicE KacE',
                            order: 2
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
                            order: 1,
                            artistID: '2422',
                        },
                        track2: {
                            name: 'スキップ、スキップ！！',
                            nameRomaji: 'SKIP, SKIP!!',
                            artistName: 'チェリーヴァン',
                            artistNameRomaji: 'Cherry Vin',
                            artistID: '232',
                            order: 2
                        },
                        track3: {
                            name: 'Breakerxxxxxx',
                            order: 3,
                            artistName: 'Pulse',
                            artistID: '234',
                        }
                    }
                }
            }
        }
    ];

}
