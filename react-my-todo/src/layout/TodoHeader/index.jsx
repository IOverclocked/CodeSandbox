import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
const ButtonAdd = styled.button`
    border: 1px solid ${({ theme }) => theme.colors.pink};
    color: ${({ theme }) => theme.colors.pink};
    background: ${({ theme }) => theme.colors.primary};
    border-radius: .8em;
    padding: .6em;
    font-size: .6em;
    margin: 0 1em;
    transition: 150ms;
    &:hover {
        box-shadow: 0 0 .1em .1em ${({ theme }) => theme.colors.pink}; 
    }
`
const StyledLinkTitle = styled(Link)`
    text-decoration: none;
    transition: 150ms;
    &:hover {
        text-shadow: .2em .2em .4em ${({ theme }) => theme.colors.pink}; 
    }
    &:visited, &:focus, &:active {
        color: ${({ theme }) => theme.colors.gold}
    }
`

const StyledButtonLink = styled(StyledLinkTitle)`
    &:hover {
        text-shadow: none;
    }
`

export class TodoHeader extends Component {

    render() {
        return (
            <HeaderContainer>

                <HeaderTitle>
                    <StyledLinkTitle to={'/'}>
                        <HeaderTitlePart>My</HeaderTitlePart>
                        <HeaderTitlePart>T</HeaderTitlePart>odo
                        <HeaderTitlePart>L</HeaderTitlePart>ist
                    </StyledLinkTitle>
                </HeaderTitle>

                <ButtonAdd>
                    <StyledButtonLink to={'/add'}>Add</StyledButtonLink>
                </ButtonAdd>

            </HeaderContainer>
        )
    }
}

export default TodoHeader
