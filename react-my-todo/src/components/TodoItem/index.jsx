import React, { Component } from 'react'
import styled from 'styled-components';

const ListItemContainer = styled.li`
    display: flex;
    font-size: .5em;
    padding: .5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
`
const ListItemTitle = styled.h2`
    max-width: 20vw;
    max-height: 8vh; 
    font-style: italic;
    font-weight: 200;
    font-size: 1.5em;
    color: ${({ theme }) => theme.colors.gold};
    padding: 0 1em 0 1em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.pink};
    border-left: 1px solid ${({ theme }) => theme.colors.pink};
    box-shadow: -1px 1px 2px -1px ${({ theme }) => theme.colors.pink};
`
const ListItemDescription = styled.div`
    padding: 1em;
    color:  ${({ theme }) => theme.colors.little};
    border-right: 2px solid ${({ theme }) => theme.colors.pink};
`
const Checkbox = styled.input`

`
export class TodoItem extends Component {
    render() {
        return (
            <ListItemContainer>
                <ListItemTitle>
                    {this.props.title}
                </ListItemTitle>
                <ListItemDescription>
                    {this.props.description}
                </ListItemDescription>
                <Checkbox type="checkbox" />
            </ListItemContainer>
        )
    }
}

export default TodoItem
