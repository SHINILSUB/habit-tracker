import React, { Component } from 'react';

class Habit extends Component {
    render() {
        state = {
            count = 0,
        };
        handelInclement = () => {
            this.setState({ count: this.state.count = + 1});
        }
        handelDecrement = () => {
            count = this.state.count = - 1
            this.setState({ count: count < 0 ? 0 : count});
        }
        console.log(this.props.habit);
        const {name, count} =this.props.habit;
        return (

        <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handelInclement}>
        <i className="fas fa-plus"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handelDecrement}>
        <i className="fas fa-minus"></i>
        </button>
        <button className="habit-button habit-deleate">
        <i className="fas fa-trash"></i>
        </button>
        </li>
        );
        
    }
}

export default Habit;