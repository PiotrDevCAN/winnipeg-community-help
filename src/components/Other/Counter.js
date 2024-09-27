import React, { Component } from 'react';

class Counter extends Component {

    // State initialization
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    // Method to increment the counter
    increment = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    // Render method to display the UI
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
