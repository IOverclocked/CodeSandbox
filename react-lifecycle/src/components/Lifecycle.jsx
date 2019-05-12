import React, { Component } from 'react'
import LifecycleChild from './LifecycleChild.jsx'

class Lifecycle extends Component {

    constructor(props) {
        super(props)

        console.log("Parent: Constructor");

        this.state = {
            number: undefined
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`Parent: getDerivedStateFromProps ${props.number} ${state.number}`);
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        //wywoływana zawsze przed render

        console.log(`Parent: shouldComponentUpdate ${nextProps.number} ${nextState.number}`);

        //jeśli false render się nie wykona
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`Parent: getSnapshotBeforeUpdate ${prevProps.number} ${prevState.number}`);
        return null;
    }

    submit = (e) => {
        e.preventDefault();
        console.log('Parent: State changed');

        this.setState({
            number: e.target.number.value
        })
    }

    increment = (e) => {
        // console.log(e);
        this.setState({ number: Number(this.state.number) + 1 })
    }

    decrement = (e) => {
        // console.log(e);
        this.setState({ number: Number(this.state.number) - 1 })
    }

    render() {

        console.log("Parent: Render");

        return (
            <div>
                <form onSubmit={this.submit}>
                    <input name="number" type="number" />
                    <input type="submit" value="Propagate to child" />
                </form>
                <div>
                    {this.state.number !== undefined &&
                        <LifecycleChild
                            number={this.state.number}
                            increment={this.increment}
                            decrement={this.decrement}
                        />
                    }
                </div>
            </div>
        )
    }

    componentDidMount() {
        //od razu po renderze 
        //zmiany w dom tutaj

        console.log("Parent: DidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //wywoływana od razu po renderze dobre miejsce na zmiany w DOM
        console.log(`Parent: DidUpdate ${prevProps.number} ${prevState.number} ${snapshot}`);
    }

    componentWillUnmount() {
        console.log("9. WillUnmount");
    }

}

export default Lifecycle
