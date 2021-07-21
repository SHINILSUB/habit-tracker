import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "reading", count: 0 },
      { id: 2, name: "runnung", count: 0 },
      { id: 3, name: "coding", count: 0 },
    ],
  };
  handelInclement = (habit) => {
    console.log(`handleInclement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits });
  };
  handelDecrement = (habit) => {
    console.log(`handleDecrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };
  handleDelete = (habit) => {
    console.log(`handleDelete ${habit.id}`);
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };
  render() {
    return (
      <>
      <Navbar
      totalCount={this.state.habits.filter(item => item.count > 0).length}
      />
      <Habits
        habits={this.state.habits}
        onIncrement={this.handelInclement}
        onDecrement={this.handelDecrement}
        onDlete={this.handleDelete}
      />
      </>
    );
  }
}

export default App;
