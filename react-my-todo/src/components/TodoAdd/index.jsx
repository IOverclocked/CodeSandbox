import React, { Component } from 'react'
import styled from 'styled-components'
import { setTimeout } from 'timers';

const ValidateInfo = styled.div`
    padding: 1em;
    border: 1px solid ${({ theme }) => theme.colors.pink};
    margin: 0 auto;
    width: 60vw;
    font-size: .8em;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.littlePrimary};
    color: ${({ theme }) => theme.colors.gold};
    position: relative;
    top: -200px;
    transition: 500ms ease-out;
`

export class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            discription: '',
            isDone: false,
            validate: false
        }
    }

    handleSetTitle = (e) => {
        console.log(this.props.match.params);

        this.setState({ title: e.target.value });
    }

    handleSetDiscription = (e) => {
        this.setState({ discription: e.target.value });
    }

    handleAddToList = (e) => {
        e.preventDefault();
        const { title, discription } = this.state;
        if (title && discription) {
            console.log('ok');
        } else {
            this.$$('#feedback-msg').style.top = '50px';
            const timeout = setTimeout(() => {
                this.$$('#feedback-msg').style.top = '-200px';
                clearTimeout(timeout);
            }, 2000);
            console.log('error');
        }
    }

    $$(selector) {
        return document.querySelector(selector);
    }

    render() {
        return (
            <>
                <form>
                    <input type="text" name="title" placeholder="Title task..." onChange={this.handleSetTitle} />
                    <input type="text" name="description" placeholder="discription task..." onChange={this.handleSetDiscription} />
                    <button onClick={this.handleAddToList}>Add to list</button>
                </form>
                <ValidateInfo id="feedback-msg">
                    <p>Wypełnij wszystkie pola!</p>
                </ValidateInfo>
            </>
        )
    }
}

export default index
