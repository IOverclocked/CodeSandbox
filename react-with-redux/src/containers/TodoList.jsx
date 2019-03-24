import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';

class TodoList extends Component {

    render() {
        const { todos, deleteTodo, editModeOn, toggleCompleted } = this.props;
        return (
            <ul>
                <Todo todos={todos} deleteTodo={deleteTodo} editModeOn={editModeOn} toggleCompleted={toggleCompleted} />
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {
            dispatch({ type: 'DELETE_TODO', id })
        },
        editModeOn: (todo) => {
            dispatch({ type: 'EDIT_MODE_ON', todo })
        },
        toggleCompleted: (id) => {
            dispatch({ type: 'TOGGLE_COMPLETED', id })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
