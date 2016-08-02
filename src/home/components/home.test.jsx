import React from 'react';
import {shallow} from 'enzyme';
import Home from './home';
import {Provider} from 'mobx-react';

describe('<Home />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <Home />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
