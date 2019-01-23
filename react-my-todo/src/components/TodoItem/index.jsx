import React, { Component } from 'react'
import Checkbox from '../Checkbox'
import styled from 'styled-components'

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

export class TodoItem extends Component {
    render() {
        const { id, title, description, isDone } = this.props;
        return (
            <ListItemContainer>
                <ListItemTitle>
                    {title}
                </ListItemTitle>
                <ListItemDescription>
                    {description}
                </ListItemDescription>
                <Checkbox
                    checked={isDone}
                    onChange={this.props.onChangeDone.bind(this, id)}
                />
            </ListItemContainer>
        )
    }
}

export default TodoItem
