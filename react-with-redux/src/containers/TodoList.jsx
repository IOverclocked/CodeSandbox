/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editModeOn, toggleCompleted, changeVisible } from '../actions';
import Todo from '../components/Todo';

class TodoList extends Component {
    render() {
        const { list, visibleTypes, deleteTodo, editModeOn, toggleCompleted, changeVisible } = this.props;
        const { all, todo, completed } = visibleTypes;
        return (
            <>
                <ul>{
                    list.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} editModeOn={editModeOn} toggleCompleted={toggleCompleted} />)
                }</ul>
                <button onClick={() => changeVisible(all)}>All</button>
                <button onClick={() => changeVisible(todo)}>Todo</button>
                <button onClick={() => changeVisible(completed)}>Completed</button>
            </>
        )
    }
}

const checkVisibleType = (list, type) => {
    switch (type) {
        case 'ALL':
            return list;
        case 'TODO':
            return list.filter(t => !t.done);
        case 'COMPLETED':
            return list.filter(t => t.done);
    }
}

const mapStateToProps = (state) => {
    return {
        list: checkVisibleType(state.todos.list, state.visibleFilters.visible),
        visibleTypes: state.visibleFilters.visibleTypes
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
