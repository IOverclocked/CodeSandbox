import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

class AddTodo extends Component {
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

    render() {
        const { todo } = this.state;

        return (
            <form onSubmit={this.addTodo}>
                <input type="text" name="todo" value={todo} onChange={this.handleChange} required />
                <button type="submit" name="submit" value="Add">Add</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => { dispatch({ type: 'ADD_TODO', todo }) }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
