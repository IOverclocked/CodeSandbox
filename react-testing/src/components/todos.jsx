import React, {Component} from 'react';
import TodosItem from './todosItem';

class Todos extends Component {
    render() {

        let todosItems;
        if(this.props.todos) {
            todosItems = this.props.todos.map(todos => {
                return (
                    <TodosItem key={todos.id} title={todos.title}/>
                )
            })
        }

        return (
            <div className="Todos">
                {todosItems}
            </div>
        );
    }
}

export default Todos;
