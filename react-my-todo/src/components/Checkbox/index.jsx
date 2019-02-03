import React from 'react'
import styled from 'styled-components'

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    width: 0;
    height: 0;
    visibility: hidden;
`
const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 3px;
`
const Container = styled.label`
    margin: 0 .2em;
    width: 2em;
    height: 2em;
    border-radius: 3px;
    background: ${({ checked, theme }) => checked ? theme.colors.pink : theme.colors.gold};
    ${HiddenCheckbox}:focus + & {
        box-shadow: 0 0 0 2px ${({ theme, checked }) => checked ? theme.colors.gold : theme.colors.pink};
    };
    ${Icon} {
        visibility: ${({ checked }) => checked ? 'visible' : 'hidden'};
    }
`
const Checkbox = ({ checked, ...props }) => (
    <Container checked={checked}>
        <HiddenCheckbox checked={checked} {...props} />
        <Icon viewBox="0 0 24 24">
            <polyline points="19 6 9 17 4 12"></polyline>
        </Icon>
    </Container>
)

export default Checkbox;