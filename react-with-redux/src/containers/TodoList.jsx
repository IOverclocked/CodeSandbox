import React, { Component } from 'react';
import { connect } from 'react-redux';

export class TodoList extends Component {
    render() {
        const { todos } = this.props;
        return (
            <ul>
                {
                    todos.map(el => <li key={el.id}>{el.body}</li>)
                }
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodoList);
