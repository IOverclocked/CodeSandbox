/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editModeOn, toggleCompleted, changeVisible } from '../actions/todosActions';
import Todo from '../components/Todo';

class TodoList extends Component {
    render() {
        const { todos, visibleTypes, deleteTodo, editModeOn, toggleCompleted, changeVisible } = this.props;
        const { all, todo, completed } = visibleTypes;
        return (
            <>
                <ul>
                    <Todo todos={todos} deleteTodo={deleteTodo} editModeOn={editModeOn} toggleCompleted={toggleCompleted} />
                </ul>
                <button onClick={() => changeVisible(all)}>All</button>
                <button onClick={() => changeVisible(todo)}>Todo</button>
                <button onClick={() => changeVisible(completed)}>Completed</button>
            </>
        )
    }
}

const checkVisibleType = (todos, type) => {
    switch (type) {
        case 'ALL':
            return todos;
        case 'TODO':
            return todos.filter(t => !t.done);
        case 'COMPLETED':
            return todos.filter(t => t.done);
    }
}

const mapStateToProps = (state) => {
    return {
        todos: checkVisibleType(state.todos, state.visible),
        visibleTypes: state.visibleTypes
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
