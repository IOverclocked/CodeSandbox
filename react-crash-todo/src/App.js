import React, { Component } from 'react';
import Todos from './components/Todos.jsx';
import TodoAdd from './components/TodoAdd';
import Header from './components/layout/Header.jsx';
import uuid from 'uuid';

import './App.css';

class App extends Component {
    state = {
        todos: [{
            id: uuid.v4(),
            title: 'title1',
            completed: false
        }, {
            id: uuid.v4(),
            title: 'title2',
            completed: true
        }, {
            id: uuid.v4(),
            title: 'title3',
            completed: false
        }]
    }


    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
    }

    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    render() {

        console.table(...this.state.todos);

        return (
            <div className="App">
                <div className="container">

                </div>
                <Header />
                <TodoAdd addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
            </div>
        );
    }
}

export default App;
