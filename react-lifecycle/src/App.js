import React, { Component } from 'react';
import Lifecycle from './components/Lifecycle.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App" style={appStyle}>
                it's works!
                <Lifecycle />
            </div>
        );
    }
}

const appStyle = {
    padding: '1rem',
    width: '100%',
    height: '100%',
    color: '#fff',
    background: '#4f4f4f'
}

export default App;
