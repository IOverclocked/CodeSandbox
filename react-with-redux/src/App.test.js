import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AddTodo from './containers/AddTodo';
import EditTodo from './containers/EditTodo';
import TodoList from './containers/TodoList';

it('renders without crashing', () => {
    shallow(<App />);
})

it('App renderers components', () => {
    const wrapper = shallow(<App />);
    const component = <h2>Welcome</h2>;
    expect(wrapper.contains(component)).toEqual(true);
    // expect(wrapper.containsMatchingElement(<EditTodo />)).toEqual(true);
    // expect(wrapper.containsMatchingElement(<TodoList />)).toEqual(true);
})
