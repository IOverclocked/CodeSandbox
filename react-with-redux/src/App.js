import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';
import EditTodo from './containers/EditTodo';
import { connect } from 'react-redux';

export class App extends Component {
    static propTypes = {
        //variables
        editMode: PropTypes.object.isRequired
    }
    render() {
        const { editMode } = this.props;
        return (
            <>
                <h2>Welcome</h2>
                {
                    editMode.active
                        ? <EditTodo todo={editMode.todo} />
                        : <><AddTodo /><TodoList /></>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        editMode: state.editMode.edit
    }
}

export default connect(mapStateToProps)(App);


