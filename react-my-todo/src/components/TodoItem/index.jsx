import React from 'react'
import Checkbox from '../Checkbox'
import styled from 'styled-components'

const ListItemContainer = styled.li`
    font-size: .5em;
    padding: .5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
`
const ListItemTitle = styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-style: italic;
    font-weight: 200;
    font-size: 3em;
    color: ${({ theme }) => theme.colors.gold};
    padding: .5em 0 .5em .5em;
    border-bottom: 1px solid ${({ theme }) => theme.colors.pink};
    border-left: 1px solid ${({ theme }) => theme.colors.pink};
    box-shadow: -1px 1px 2px -1px ${({ theme }) => theme.colors.pink};
`
const ListItemDescription = styled.div`
    font-size: 2em;
    padding: 1em;
    color:  ${({ theme }) => theme.colors.little};
    border-right: 2px solid ${({ theme }) => theme.colors.pink};
`

const TodoItem = ({ id, title, discription, isDone, onChangeDone, onDeleteTodoItem }) => (
    <ListItemContainer>
        <ListItemTitle>
            {title}
            <Checkbox
                checked={isDone}
                onChange={onChangeDone.bind(this, id)}
            />
        </ListItemTitle>
        <ListItemDescription>
            {discription}
        </ListItemDescription>
        <button onClick={onDeleteTodoItem.bind(this, id)}>Delete</button>
    </ListItemContainer>
)

export default TodoItem
