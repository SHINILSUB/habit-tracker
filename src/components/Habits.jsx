import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
    
    handelInclement = habit => {
        this.props.onInclement(habit) };

    handelDecrement = habit => {
        this.props.onDecrement(habit)
    };
    handleDelete = habit => {
        this.props.onDelete(habit)

    };
    render() {
        return (
            <ul>
                {this.props.habits.map(habit =>(
                    <Habit key={habit.id} 
                    habit={habit} 
                    onInclement={this.handelInclement}
                    onDecrement={this.handelDecrement}
                    onDelete={this.handleDelete}/>

                ))}
            </ul>
        );
    }
}

export default Habits;