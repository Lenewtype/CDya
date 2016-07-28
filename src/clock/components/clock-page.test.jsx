import React from 'react';
import {shallow, mount} from 'enzyme';
import {Provider} from 'mobx-react';
import ClockPage from './clock-page';

describe('<Clock>', () => {

    let store;

    beforeEach(() => {
        store = {clock: {date: new Date()}};
    });

    it('should render correctly', () => {
        const dom = shallow(
            <Provider store={store}>
                <ClockPage/>
            </Provider>
        );
        expect(dom).to.have.length(1);
    });

    it('should render the time in <h2>', () => {
        const dom = mount(
            <Provider store={store}>
                <ClockPage/>
            </Provider>
        );
        expect(dom.find('h2').length).to.be.greaterThan(0);
    });

});
