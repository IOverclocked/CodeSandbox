import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
    let input;
    // https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/todos
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }

                dispatch(addTodo(input.value))
                input.value = '';
            }}>
                <input ref={node => input = node} />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodo);