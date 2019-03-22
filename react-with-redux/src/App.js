import React, { Component } from 'react'
import { createStore } from 'redux';

//State
const initState = {
    todos: [],
    posts: []
}

//Ations
const todoAction = {
    type: 'ADD_TODO',
    todo: 'buy milk'
}
const postAction = {
    type: 'ADD_POST',
    post: 'Im learn redux'
}

//Create store
const store = createStore(reducer);


//Reducers
function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.todo]
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [...state.posts, action.post]
            }
        default:
            return state
    }
}

store.subscribe(() => {
    console.log('state update');
    console.log(store.getState());
})

export class App extends Component {

    handleAddTodo = () => {
        store.dispatch(todoAction);
    }

    handleAddPost = () => {
        store.dispatch(postAction);
    }

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


