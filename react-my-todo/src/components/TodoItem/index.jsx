import React from 'react'
import Checkbox from '../Checkbox'
import { Link } from 'react-router-dom'
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
const BoxButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const ButtonStyled = styled.button`
    border: none;
    padding: ${({ link }) => link ? 0 : '.5em'};
    cursor: pointer;
    border-radius: .5em;
    margin: 1em 1em 1em 0;
    color: ${ ({ theme }) => theme.colors.white};
    background: ${ ({ theme }) => theme.colors.littlePrimary};
    border: 1px solid ${ ({ theme, del }) => del ? theme.colors.pink : theme.colors.gold};
    transition: 150ms;
    &:hover {
        box-shadow: 0 0 10px 1px ${ ({ theme, del }) => del ? theme.colors.pink : theme.colors.gold};
    }
    &:focus {
        outline: none;
    }
`
const LinkStyled = styled(Link)`
    text-decoration: none;
    display: block;
    padding: .5em;
    color: ${ ({ theme }) => theme.colors.white};
`

const TodoItem = ({ id, title, description, isDone, onChangeDone, onDeleteTodoItem }) => (
    <ListItemContainer>
        <ListItemTitle>
            {title}
            <Checkbox
                checked={isDone}
                onChange={onChangeDone.bind(this, id)}
            />
        </ListItemTitle>
        <ListItemDescription>
            {description}
        </ListItemDescription>
        <BoxButtons>
            <ButtonStyled link>
                <LinkStyled to={`/edit_item/${id}`}>Edit</LinkStyled>
            </ButtonStyled>
            <ButtonStyled del onClick={onDeleteTodoItem.bind(this, id)}>Delete</ButtonStyled>
        </BoxButtons>
    </ListItemContainer>
)

export default TodoItem
