import React, {Component} from 'react';
import uuid from "uuid";

class AddProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Designe', 'Web Development', 'Mobile Development']
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.refs.title.value === "") {
            alert('title is required');
        } else {
            this.setState({newProject: {

                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value

            }}, () => {

                if(typeof this.props.addProject === 'function') {
                    this.props.addProject(this.state.newProject);
                }

            })
        };

    }

    render() {

        let categoryOptions = this.props.categories.map(category => {
            return <option key={category}>{category}</option>
        })

        return (
            <div className="AddProject">
                <h3>Add Project</h3>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Title</label><br />
                        <input type="text" ref="title" />
                    </div>

                    <div>
                        <label>Category</label><br />
                        <select ref="category">
                            {categoryOptions}
                        </select>
                    </div>

                    <input type="submit" value="submit" />

                </form>
            </div>
        );
    }
}

export default AddProject;
