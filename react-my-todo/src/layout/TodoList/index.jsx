import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from '../../components/TodoItem';
import TodoAdd from '../../components/TodoAdd';
import * as provider from '../../helpers/provider';
import uuid from 'uuid';

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
    transition: 150ms ease-out;
`
export class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            feedbackMsg: '',
            listItems: []
        }
    }

    componentDidMount = () => {
        this.downloadTodoList();
    }

    downloadTodoList = async () => {
        const listItems = await provider.getAll();
        this.setState({ listItems });
    }

    onDeleteTodoItem = async (id) => {
        const { listItems } = this.state;
        const response = await provider.del(id);
        if (response.status === 200) {
            this.showFeedback('The task was successfully deleted');
            this.setState({ listItems: listItems.filter(item => item.id !== id) });
            this.hiddenFeedback();
        }
    }

    onChangeDone = async (id) => {
        const { listItems } = this.state;

        let newListItems = listItems.map(item => {
            if (item.id === id) {
                item.isDone = !item.isDone;
            }
            return item;
        })

        this.setState({ listItems: newListItems });

        const item = listItems.find(item => item.id === id);

        provider.done(id, item);
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
                    onChangeDone={this.onChangeDone}
                    onDeleteTodoItem={this.onDeleteTodoItem}>
                </TodoItem>
            )
        })
    }

    handleChange = (e) => {
        if (e.target.name === 'title') {
            this.setState({ title: e.target.value });
        } else {
            this.setState({ description: e.target.value });
        }
    }

    showFeedback(msg) {
        this.setState({ feedbackMsg: msg });
        const feedback = this.$$('#feedback-validate');
        feedback.style.top = '0';
        feedback.style.opacity = '1';
    }

    hiddenFeedback() {
        const timeout = setTimeout(() => {
            this.setState({ feedbackMsg: '' });
            const feedback = this.$$('#feedback-validate');
            if (feedback) {
                feedback.style.top = '-200px';
                feedback.style.opacity = '0';
                clearTimeout(timeout);
            }
        }, 2000);
    }

    add = async (e) => {
        e.preventDefault();
        const { title, description, listItems } = this.state;

        console.log(title, description);

        if (title && description) {
            const newItem = {
                id: uuid.v4(),
                title: title,
                description: description,
                isDone: false
            };
            const item = await provider.add(newItem);
            this.setState({ listItems: [...listItems, item] })
        } else {
            this.showFeedback('All fields are required!');
            this.hiddenFeedback();
            console.log('error');
        }
    }

    $$(selector) {
        return document.querySelector(selector);
    }

    render() {
        let { title, description, feedbackMsg } = this.state;
        return (
            <>
                <TodoAdd add={this.add} handleChange={this.handleChange} title={title} description={description} />
                <TodoListContainer>
                    {this.createTodoList()}
                </TodoListContainer>
                <FeedbackValidate id="feedback-validate">
                    <p>{feedbackMsg}</p>
                </FeedbackValidate>
            </>
        )
    }
}

export default TodoList
