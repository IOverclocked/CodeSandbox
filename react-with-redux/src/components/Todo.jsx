import React from 'react';
import PropTypes from 'prop-types';

const styleIsDone = {
    cursor: 'pointer',
    textDecoration: 'line-through'
}

const styleNotDone = {
    cursor: 'pointer',
    textDecoration: 'none'
}

const Todo = ({ todo, deleteTodo, editModeOn, toggleCompleted }) => (
    <li key={todo.id}>
        <p style={todo.done ? styleIsDone : styleNotDone} onClick={(e) => toggleCompleted(todo.id)}>{todo.todo}</p>
        <button name="delete" value="Delete" onClick={(e) => deleteTodo(todo.id)}>Delete</button>
        <button name="edit" value="edit" onClick={(e) => editModeOn(todo)}>Edit</button>
    </li>
);

Todo.propTypes = {
    //variables
    todo: PropTypes.object.isRequired,
    //functions
    deleteTodo: PropTypes.func.isRequired,
    editModeOn: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
}

export default Todo;