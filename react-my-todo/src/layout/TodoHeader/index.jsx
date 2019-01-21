import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3d4754;
    width: 50vw;
    height: 20vh;
    margin: 0 auto;
    border: 1px solid #ffc640;
`

const HeaderTitle = styled.h2`
    width: 100%;
    font-size: 2em;
    color: #ffc640;
    margin-left: 1em;
    font-weight: 300;
    text-shadow: 5px 5px 5px #ff616c;
`

const HeaderTitlePart = styled.span`
    font-size: 1.5em;
    font-weight: 100;
    font-style: italic;
    font-family: cursive;
`

export class TodoHeader extends Component {
    render() {
        return (
            <HeaderContainer>
                <HeaderTitle>
                    <HeaderTitlePart>My</HeaderTitlePart>
                    <HeaderTitlePart>T</HeaderTitlePart>odo
                    <HeaderTitlePart>L</HeaderTitlePart>ist
                </HeaderTitle>
            </HeaderContainer>
        )
    }
}

export default TodoHeader
