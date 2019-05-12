import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as provider from '../../helpers/provider';

export class TodoEdit extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            title: '',
            description: '',
            isDone: false,
        }
    }

    componentDidMount = () => {
        this.downloadDetailsForItem();
    }

    downloadDetailsForItem = async () => {
        const item = await provider.getOne(this.props.match.params.id);
        const { id, title, description, isDone, } = item;
        this.setState({ id, title, description, isDone });
    }

    handleChange = (e) => {
        if (e.target.name === 'title') {
            this.setState({ title: e.target.value });
        } else {
            this.setState({ description: e.target.value });
        }
    }

    handleEdit = async (e) => {
        e.preventDefault();
        const { id, title, description } = this.state;
        if (title && description) {
            await provider.edit(id, { ...this.state });
            document.getElementById('link').click();
        } else {
            console.log('Błąd');
        }
    }

    render() {
        const { title, description } = this.state;
        return (
            <form>
                <input type="text" name="title" value={title} onChange={this.handleChange} />
                <input type="text" name="description" value={description} onChange={this.handleChange} />
                <button onClick={this.handleEdit}>Edit</button>
                <Link id="link" to="/" />
            </form>
        )
    }
}

export default TodoEdit
