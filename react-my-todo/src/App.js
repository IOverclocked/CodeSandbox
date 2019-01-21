import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import TodoHeader from './layout/TodoHeader';
import TodoList from './layout/TodoList';


const GlobalStyled = createGlobalStyle`
    body {
        background-color: #2c3643;
        margin: 0px;
        padding: 0px;

        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    }
`

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

class App extends Component {
    render() {
        return (
            <>
                <GlobalStyled />
                <AppContainer>
                    <TodoHeader />
                    <TodoList />
                </AppContainer>
            </>
        );
    }
}

export default App;
