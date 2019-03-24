import React, { Component } from 'react'
import TodoList from './containers/TodoList'
import AddTodo from './containers/AddTodo';
import EditTodo from './containers/EditTodo';
import { connect } from 'react-redux';

export class App extends Component {
    render() {
        const { edit } = this.props;
        return (
            <>
                {
                    edit.active
                        ? <EditTodo todo={edit.todo} />
                        : <><AddTodo /><TodoList /></>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        edit: state.edit
    }
}

export default connect(mapStateToProps)(App)


