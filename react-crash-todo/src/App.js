import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';
import Header from './components/layout/Header';
import About from './components/pages/About';
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
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <TodoAdd addTodo={this.addTodo} />
                                <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
                            </React.Fragment>
                        )} />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
