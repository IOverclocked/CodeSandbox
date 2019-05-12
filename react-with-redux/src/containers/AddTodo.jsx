/* eslint-disable default-case */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Counter from '../components/Counter';

class AddTodo extends Component {
    static propTypes = {
        //variables
        listLength: PropTypes.number.isRequired,
        visibleType: PropTypes.string.isRequired,
        //functions
        addTodo: PropTypes.func.isRequired
    }

    state = {
        todo: ''
    }

    handleChange = (e) => { this.setState({ todo: e.target.value }) }

    addTodo = (e) => {
        e.preventDefault();
        const todo = {
            id: uuid.v1(),
            todo: this.state.todo,
            done: false
        }
        this.props.addTodo(todo);
        this.setState({ todo: '' });
    }

    setTitle = (type) => {
        switch (type) {
            case 'ALL':
                return 'All tasks';
            case 'TODO':
                return 'Todo tasks';
            case 'COMPLETED':
                return 'Completed task';
        }
    }

    render() {
        const { todo } = this.state;
        const { listLength, visibleType } = this.props;

        return (
            <>
                <Counter listLength={listLength} />
                <h2>{this.setTitle(visibleType)}</h2>
                <form onSubmit={this.addTodo}>
                    <input type="text" name="todo" value={todo} onChange={this.handleChange} required />
                    <button type="submit" name="submit" value="Add">Add</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listLength: state.todos.list.length,
        visibleType: state.visibleFilters.visible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => { dispatch(addTodo(todo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
