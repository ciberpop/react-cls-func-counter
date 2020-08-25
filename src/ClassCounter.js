import React from 'react';
import './App.css';

export default class ClassCounter extends React.Component {
    state = {
        counter: 0
    }

    incHandler = () => {
        this.setState(({ counter }) => {
            return {
                counter: counter + 1
            }
        })
    }

    decHandler = () => {
        this.setState(({ counter }) => {
            return {
                counter: counter - 1
            }
        })
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.counter}</h1>
                <button onClick={this.incHandler}>Increment</button>
                <button onClick={this.decHandler}>Decrement</button>
            </div>
        )
    }
}
