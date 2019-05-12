import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';

import App from './App';

const setup = (setupProps = {}) => {
    // const store = configureStore();
    const wrapper = shallow(<App/>);

    return {
        // store,
        wrapper
    };
};

describe('App', () => {
    test('renders without crashing', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    });
});


