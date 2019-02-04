import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from '../../components/TodoItem';
import TodoAdd from '../../components/TodoAdd';

const TodoListContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`
export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            listItems: [{
                id: 1,
                title: 'Task1',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius.',
                isDone: false,
            }, {
                id: 2,
                title: 'Task2',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius.',
                isDone: false,
            }, {
                id: 3,
                title: 'Task3',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius.',
                isDone: true,
            }]
        }
    }

    onChangeDone = (id) => {
        let newListItems = this.state.listItems.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            }
            return item;
        })
        this.setState({ listItems: newListItems })
        console.log(this.state.listItems);
    }

    createTodoList = () => {
        return this.state.listItems.map(item => {
            return (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    isDone={item.isDone}
                    onChangeDone={this.onChangeDone}>
                </TodoItem>
            )
        })
    }
    render() {
        return (
            <>
                <TodoAdd />
                <TodoListContainer>
                    {this.createTodoList()}
                </TodoListContainer>
            </>
        )
    }
}

export default TodoList
