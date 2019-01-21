import React, { Component } from 'react';
import styled, { keyframes, createGlobalStyle, ThemeProvider } from 'styled-components';
import logo from './logo.svg';
import theme from './theme';

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
    background-color: ${({ isDark, theme }) => isDark ? theme.colors.dark : theme.colors.gray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s ease;

    ${({ theme }) => theme.media.desktop} {
        background: ${({ theme }) => theme.colors.white}
    }
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
            <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <AppContainer>
                    <AppHeader isDark>
                        <AppLogo src={logo} alt="logo" />
                    </AppHeader>
                </AppContainer>
            </>
            </ThemeProvider>
        );
    }
}

export default App;
