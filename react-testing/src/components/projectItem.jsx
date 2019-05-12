import React, {Component} from 'react';

class ProjectItem extends Component {

    deleteProject = () => {
        if(typeof this.props.onDelete === "function") {
            this.props.onDelete(this.props.project.id);
        }
    }

    render() {
        return (
            <li className="ProjectItem">
                <strong>{this.props.project.title}</strong>- {this.props.project.category}
                <button onClick={this.deleteProject}>Delete</button>
            </li>
        );
    }
}

export default ProjectItem;
