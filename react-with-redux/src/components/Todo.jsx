import React from 'react';

const styleIsDone = {
    cursor: 'pointer',
    textDecoration: 'line-through'
}

const styleNotDone = {
    cursor: 'pointer',
    textDecoration: 'none'
}

const Todo = ({ todos, deleteTodo, editModeOn, toggleCompleted }) => (
    <>{
        todos.map(todo => (
            <li style={todo.done ? styleIsDone : styleNotDone} key={todo.id} onClick={(e) => toggleCompleted(todo.id)}>
                <p>{todo.todo}</p>
                <button name="delete" value="Delete" onClick={(e) => deleteTodo(todo.id)}>Delete</button>
                <button name="edit" value="edit" onClick={(e) => editModeOn(todo)}>Edit</button>
            </li>
        ))
    }</>

);


export default Todo;