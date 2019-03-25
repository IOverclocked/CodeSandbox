import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todosActions';
import Counter from '../components/Counter';

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
        const { todosLength } = this.props;

        return (
            <>
                <Counter todosLength={todosLength} />
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
        todosLength: state.todos.length + 1
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todo) => { dispatch(addTodo(todo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
