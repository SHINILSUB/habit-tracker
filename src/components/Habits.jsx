import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';


class Habits extends Component {
    
    handelInclement = habit => {
        this.props.onInclement(habit) };

    handelDecrement = habit => {
        this.props.onDecrement(habit)
    };
    handleDelete = habit => {
        this.props.onDelete(habit)

    };
    hadleAdd = name => {
        this.props.onAdd(name)
    }
    render() {
        return (
            <>
            
            <HabitAddForm onAdd = {this.hadleAdd}/>
            <ul>
                {this.props.habits.map(habit =>(
                    <Habit key={habit.id} 
                    habit={habit} 
                    onInclement={this.handelInclement}
                    onDecrement={this.handelDecrement}
                    onDelete={this.handleDelete}/>

                ))}
            </ul>
            <button className="habits-reset" onClick={this.onReset}>reset</button>
            </>
        );
    }
}

export default Habits;