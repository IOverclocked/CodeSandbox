/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editModeOn, toggleCompleted, changeVisible } from '../actions/todosActions';
import Todo from '../components/Todo';

class TodoList extends Component {
    render() {
        const { todos, deleteTodo, editModeOn, toggleCompleted, changeVisible } = this.props;
        return (
            <>
                <ul>
                    <Todo todos={todos} deleteTodo={deleteTodo} editModeOn={editModeOn} toggleCompleted={toggleCompleted} />
                </ul>
                <button onClick={() => changeVisible('ALL')}>All</button>
                <button onClick={() => changeVisible('TODO')}>Todo</button>
                <button onClick={() => changeVisible('COMPLETED')}>Completed</button>
            </>
        )
    }
}

const checkVisibleType = (todos, type) => {
    debugger
    switch (type) {
        case 'ALL':
            return todos;
        case 'COMPLETED':
            return todos.filter(t => t.done);
        case 'TODO':
            return todos.filter(t => !t.done);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: checkVisibleType(state.todos, state.visible),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        },
        editModeOn: (todo) => {
            dispatch(editModeOn(todo))
        },
        toggleCompleted: (id) => {
            dispatch(toggleCompleted(id))
        },
        changeVisible: (visibleType) => {
            dispatch(changeVisible(visibleType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
