import React, { Component } from 'react';
import { createStore } from 'redux';

//store
const initialMovies = {
    listName: 'Favourite', 
    movies: [
        'Rambo', 'Hakerzy', 'Matrix'
    ]
}

//reducers
function movies(state = initialMovies, action) {
    switch (action.type) {    
        case 'ADD': 
            return {
                ...state,
                movies: [...state.movies, action.movie]
            }
        case 'RESET':
            return {
                ...state,
                movies: []
            }
        default:
            return state;
    }
}

//create store
const store = createStore(movies);

window.store = store;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>React Redux</h2>
        <ul>
            
        </ul>
      </div>
    );
  }
}

export default App;
