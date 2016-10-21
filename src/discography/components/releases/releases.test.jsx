import React from 'react';
import {shallow} from 'enzyme';
import Releases from './releases';
import {Provider} from 'mobx-react';

describe('<Releases />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <Releases />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
