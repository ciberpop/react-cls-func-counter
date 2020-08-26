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
                counter: counter - 1 >= 0 ? counter - 1 : 0
            }
        })
    }

    render() {
        return (
            <div className="counter">
                <p>Class Counter</p>
                <h1>{this.state.counter}</h1>
                <button onClick={this.incHandler}>Increment</button>
                <button onClick={this.decHandler}>Decrement</button>
            </div>
        )
    }
}
