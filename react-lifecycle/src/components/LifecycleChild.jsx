import React, { Component } from 'react'

class LifecycleChild extends Component {
    constructor(props) {
        super(props)

        console.log("Child: Construktor");

        this.state = {
            number: props.number
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.number !== state.number) {
            return {
                number: props.number
            }
        }

        console.log(`Child: getDerivedStateFromProps ${props.number} ${state.number}`);

        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        //wywoływana zawsze przed render

        console.log(`Child: shouldComponentUpdate ${nextProps.number} ${nextState.number}`);

        //jeśli false render się nie wykona
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(`Child: getSnapshotBeforeUpdate ${prevProps.number} ${prevState.number}`);
        return;
    }

    render() {
        // console.log("Child: ", this.props.number);
        // console.log("Child: ", this.state.fromChildNumber);
        console.log("Child: Render");
        return (
            <div>
                <div>
                    Counter: {this.state.number}
                </div>
                <div>
                    <button onClick={this.props.increment} >+</button>
                    <button onClick={this.props.decrement} >-</button>
                </div>

            </div>
        )

    }

    componentDidMount() {
        //od razu po renderze 
        //zmiany w dom tutaj

        console.log("Child: DidMount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //wywoływana od razu po renderze dobre miejsce na zmiany w DOM
        console.log(`Child: DidUpdate ${prevProps.number} ${prevState.number} ${snapshot}`);
    }
}

export default LifecycleChild
