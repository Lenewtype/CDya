import React from 'react';
import {shallow} from 'enzyme';
import SideMenu from './side-menu';
import {Provider} from 'mobx-react';

describe('<SideMenu />', ()=> {
    beforeEach(()=> {
        this.store = {};
    });


    it('should render correctly', ()=> {
        const dom = shallow(
            <Provider store={this.store}>
                <SideMenu />
            </Provider>
        );

        expect(dom).to.have.length(1);
    });

});
