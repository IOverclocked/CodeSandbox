import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.littlePrimary};
    height: 15vh;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.gold};
`

const HeaderTitle = styled.h2`
    width: 100%;
    font-size: .7em;
    color: ${({ theme }) => theme.colors.gold};
    margin-left: .5em;
    font-weight: 300;
    text-shadow: .1em .1em .1em ${({ theme }) => theme.colors.pink};
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
