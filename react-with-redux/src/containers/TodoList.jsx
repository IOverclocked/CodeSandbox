import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/Todo';
import { deleteTodo, editModeOn, toggleCompleted } from '../actions/todosActions'

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
            dispatch(deleteTodo(id))
        },
        editModeOn: (todo) => {
            dispatch(editModeOn(todo))
        },
        toggleCompleted: (id) => {
            dispatch(toggleCompleted(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
