import React, {Component} from 'react';
import uuid from "uuid";
import Projects from "./components/projects";
import AddProject from "./components/addProject";
import Todos from "./components/todos";
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            todos: []
        }
    }

    getProjects = () => {
        this.setState({projects: [
            {
                id: uuid.v4(),
                title: "Business Website",
                category: "Web Design"
            },
            {
                id: uuid.v4(),
                title: "Social App",
                category: "Mobile Developmnet"
            },
            {
                id: uuid.v4(),
                title: "Ecommerce Shopping Cart",
                category: "Web Development"
            }
        ]});
    }

    getTodos = () => {

        const URL = 'https://jsonplaceholder.typicode.com/todos';

        fetch(URL, {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        }).then(res => {

            if(res.ok) {
                return res.json()
            } else {
                throw new Error("Error network!")
            }

        }).then(data => {

            this.setState({todos: data})

        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.getProjects();
        this.getTodos();
    }

    componentWillMount() {
        this.getTodos();
    }

    handleAddProject = (newProject) => {
        this.setState({projects: [...this.state.projects, newProject]})
    }

    handleDeleteProject = (id) => {
        let projects = this.state.projects.filter(project => project.id !== id)
        this.setState({projects});
    }

    render() {
        return (
            <div className="App">
                <AddProject addProject={this.handleAddProject} />
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject} />
                <hr />
                <Todos todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
