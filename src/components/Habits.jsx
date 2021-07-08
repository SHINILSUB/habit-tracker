import React, { Component } from 'react';
import Habit from './Habit';

class Habits extends Component {
    state = {
        habits: [
            { id= 1 , name: 'reading', count: 0},
            { id= 2 , name: 'runnung', count: 0},
            { id= 3 , name: 'coding', count: 0},
        ],
    };
    handelInclement = habit => {
        console.log(`handleInclement ${habit}`)
    }
    handelDecrement = habit => {
        console.log(`handleDecrement ${habit}`)
    }
    handleDelete = habit => {
        console.log(`handleDelete ${habit}`)

    }
    render() {
        return (
            <ul>
                {this.state.habits.map(habit =>(
                    <Habit key={habit.id} 
                    habit={habit} 
                    onInclement={this.handelInclement}
                    onDeclement={this.handelDecrement}
                    onDelete={this.handleDelete}/>

                ))}
            </ul>
        );
    }
}

export default Habits;