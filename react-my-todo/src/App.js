import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import TodoHeader from './layout/TodoHeader';
import TodoList from './layout/TodoList';
import theme from './theme';


const GlobalStyled = createGlobalStyle`
    body {
    background-color: ${({ theme }) => theme.colors.primary};
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
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyled />
                    <AppContainer>
                        <TodoHeader />
                        <TodoList />
                    </AppContainer>
                </>
            </ThemeProvider>
        );
    }
}

export default App;
