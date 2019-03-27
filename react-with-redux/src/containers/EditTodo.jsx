import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editTodo, exitEdit } from '../actions';

class EditTodo extends Component {
    static propTypes = {
        //variables
        todo: PropTypes.object.isRequired,
        //functions
        editTodo: PropTypes.func.isRequired,
        exitEdit: PropTypes.func.isRequired
    }

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
        this.props.exitEdit();
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



const mapDispatchToProps = (dispatch) => {
    return {
        editTodo: (todo) => { dispatch(editTodo(todo)) },
        exitEdit: () => { dispatch(exitEdit()) }
    }
}

export default connect(null, mapDispatchToProps)(EditTodo);
