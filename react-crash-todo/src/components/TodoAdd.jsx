import React, { Component } from 'react'

export class TodoAdd extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add todo..."
                    style={{ flex: '10' }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Add"
                    className="btn"
                    style={{ flex: '1' }}
                />
            </form>
        )
    }
}

export default TodoAdd
