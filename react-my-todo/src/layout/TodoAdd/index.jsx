import React, { Component } from 'react'

export class index extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <form>
                <input type="text" name="title" />
                <input type="text" name="description" />
            </form>
        )
    }
}

export default index
