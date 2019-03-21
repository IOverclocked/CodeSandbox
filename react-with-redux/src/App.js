import React, { Component } from 'react';
import { createStore } from 'redux';

//store
const initialMovies = {
    movies: [
        'Rambo', 'Hakerzy', 'Matrix'
    ]
}

//reducers
function movies(state = initialMovies, action) {
    switch (action.type) {    
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
      </div>
    );
  }
}

export default App;
