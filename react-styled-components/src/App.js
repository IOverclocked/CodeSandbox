import React, { Component } from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import logo from './logo.svg';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
`
const AppContainer = styled.div`
    text-align: center;
`
const AppHeader = styled.header`
    background-color: ${({ isDark }) => isDark ? '#282c34' : '#ccc'};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`
const animeAppLogoSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
const AppLogo = styled.img`
    animation: ${animeAppLogoSpin} infinite 20s linear;
    height: 40vmin;
`

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle />
                <AppContainer>
                    <AppHeader isDark>
                        <AppLogo src={logo} alt="logo" />
                    </AppHeader>
                </AppContainer>
            </div>
        );
    }
}

export default App;
