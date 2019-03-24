import React, { Component } from 'react'
import TodoList from './containers/TodoList'

//Ations
const todoAction = {
    type: 'ADD_TODO',
    todo: 'buy milk'
}

export class App extends Component {

    render() {
        //last video #38 now #39
        return (
            <>
                <TodoList />
            </>
        )
    }
}

export default App


