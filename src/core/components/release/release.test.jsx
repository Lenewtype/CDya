import React from 'react';
import {shallow} from 'enzyme';
import Release from './release';
import {Provider} from 'mobx-react';

describe('<Release />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <Release />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
