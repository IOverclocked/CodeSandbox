import React, { Component } from 'react'

//Ations
const todoAction = {
    type: 'ADD_TODO',
    todo: 'buy milk'
}
const postAction = {
    type: 'ADD_POST',
    post: 'Im learn redux'
}

export class App extends Component {

    render() {
        //last video #38 now #39
        return (
            <>
                <button onClick={this.handleAddTodo}>Add todo</button>
                <button onClick={this.handleAddPost}>Add post</button>
            </>
        )
    }
}

export default App


