import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.littlePrimary};
    height: 15vh;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.pink};
`
const HeaderTitle = styled.h2`
    width: 100%;
    font-size: 1.5em;
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

const TodoHeader = ({ props }) => (
    <HeaderContainer>
        <HeaderTitle>
            <StyledLinkTitle to={'/'}>
                <HeaderTitlePart>My</HeaderTitlePart>
                <HeaderTitlePart>T</HeaderTitlePart>odo
                        <HeaderTitlePart>L</HeaderTitlePart>ist
                    </StyledLinkTitle>
        </HeaderTitle>
    </HeaderContainer>
)


export default TodoHeader
