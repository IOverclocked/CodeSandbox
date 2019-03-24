import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditTodo extends Component {
    state = {
        todo: this.props.todo
    }

    handleChange = (e) => {
        const todo = {
            id: this.props.todo.id,
            todo: e.target.value,
            done: this.props.todo.done
        }
        this.setState({ todo: todo })
        console.log(this.state.todo);

    }

    editTodo = (e) => {
        e.preventDefault();
        this.props.editTodo(this.state.todo);
    }

    render() {
        const { todo } = this.state;
        const { exitEdit } = this.props;
        return (
            <>
                <h3>Edit todo: {todo.id}</h3>
                <button name="exit" onClick={exitEdit}>Back</button>
                <form onSubmit={this.editTodo}>
                    <input type="text" name="todo" value={todo.todo} onChange={this.handleChange} required />
                    <button type="submit" name="submit" value="Edit">Edit</button>
                </form>
            </>
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
        editTodo: (todo) => { dispatch({ type: 'EDIT_TODO', todo }) },
        exitEdit: () => { dispatch({ type: 'EDIT_MODE_OFF' }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
