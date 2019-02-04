import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from '../../components/TodoItem';
import TodoAdd from '../../components/TodoAdd';

const TodoListContainer = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`
const FeedbackValidate = styled.div`
    padding: 1em;
    border: 1px solid ${({ theme }) => theme.colors.pink};
    font-size: .8em;
    border-radius: 5px;
    text-align: center;
    background: ${({ theme }) => theme.colors.littlePrimary};
    color: ${({ theme }) => theme.colors.gold};
    position: absolute;
    top: -200px;
    right: 1em;
    left: 1em;
    opacity: 0;
    transition: 500ms ease-out;
`
export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            discription: '',
            listItems: [{
                id: 1,
                title: 'Task1',
                discription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius.',
                isDone: false,
            }, {
                id: 2,
                title: 'Task2',
                discription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius.',
                isDone: false,
            }, {
                id: 3,
                title: 'Task3',
                discription: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, eius.',
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
                    discription={item.discription}
                    isDone={item.isDone}
                    onChangeDone={this.onChangeDone}>
                </TodoItem>
            )
        })
    }

    handleChange = (e) => {
        if (e.target.name === 'title') {
            this.setState({ title: e.target.value });
        } else {
            this.setState({ discription: e.target.value });
        }
    }

    setFeedback(opacity, positionTop) {
        const feedback = this.$$('#feedback-validate');
        feedback.style.top = positionTop;
        feedback.style.opacity = opacity;
    }

    add = (e) => {
        e.preventDefault();
        const { title, discription, listItems } = this.state;


        console.log(title, discription);

        if (title && discription) {
            listItems.push({
                id: listItems.length + 1,
                title: title,
                discription: discription,
                isDone: false
            });
            this.setState({ listItems, title: '', discription: '' });
        } else {

            this.setFeedback('1', '0');
            const timeout = setTimeout(() => {
                this.setFeedback('0', '-200px');
                clearTimeout(timeout);
            }, 2000);
            console.log('error');
        }
    }

    $$(selector) {
        return document.querySelector(selector);
    }

    render() {
        let { title, discription } = this.state;
        return (
            <>
                <TodoAdd add={this.add} handleChange={this.handleChange} title={title} discription={discription} />
                <TodoListContainer>
                    {this.createTodoList()}
                </TodoListContainer>
                <FeedbackValidate id="feedback-validate">
                    <p>Wypełnij wszystkie pola!</p>
                </FeedbackValidate>
            </>
        )
    }
}

export default TodoList
