import React from 'react';
import {shallow} from 'enzyme';
import Discography from './discography';
import {Provider} from 'mobx-react';

describe('<Discography />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <Discography />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
