import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo, editModeOn, toggleCompleted, changeVisible } from '../actions';
import Todo from '../components/Todo';

class TodoList extends Component {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
        visibleTypes: PropTypes.object.isRequired,
        visibleType: PropTypes.string.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        editModeOn: PropTypes.func.isRequired,
        toggleCompleted: PropTypes.func.isRequired,
        changeVisible: PropTypes.func.isRequired
    }

    equal = (type, value) => {
        return type === value;
    }

    toUpperFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    createButtonsFilters = (types, type, callback) => {
        return Object.keys(types).map(el => {
            const value = el.toUpperCase();
            const label = this.toUpperFirstLetter(el);
            return (
                <button
                    key={value}
                    disabled={this.equal(type, value)}
                    onClick={() => callback(value)}>
                    {label}
                </button>
            )
        })
    }

    render() {
        const {
            list,
            visibleTypes,
            visibleType,
            deleteTodo,
            editModeOn,
            toggleCompleted,
            changeVisible
        } = this.props;

        return (
            <>
                <ul>{
                    list.map(todo =>
                        <Todo
                            key={todo.id}
                            todo={todo}
                            deleteTodo={deleteTodo}
                            editModeOn={editModeOn}
                            toggleCompleted={toggleCompleted}
                        />)
                }</ul>
                <div>{
                    this.createButtonsFilters(visibleTypes, visibleType, changeVisible)
                }</div>

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
        default: 
            return;
    }
}

const mapStateToProps = (state) => {
    return {
        list: checkVisibleType(state.todos.list, state.visibleFilters.visible),
        visibleTypes: state.visibleFilters.visibleTypes,
        visibleType: state.visibleFilters.visible
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
