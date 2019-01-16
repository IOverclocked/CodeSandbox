import React, { Component } from 'react';
import styled, {keyframes} from 'styled-components';
import logo from './logo.svg';

const AppContainer = styled.div`
    text-align: center;
`
const AppHeader = styled.header`
    background-color: #282c34;
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
            <AppContainer>
                <AppHeader>
                    <AppLogo src={logo} alt="logo" />
                </AppHeader>
            </AppContainer>
        );
    }
}

export default App;
