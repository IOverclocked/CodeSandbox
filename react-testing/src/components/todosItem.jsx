import React, {Component} from 'react';

class TodosItem extends Component {

    render() {
        return (
            <li className="TodosItem">
                <strong>{this.props.title}</strong>
            </li>
        );
    }
}

export default TodosItem;
