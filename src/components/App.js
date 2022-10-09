import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w Wiedźmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "pomalować dom",
        date: "2022-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "schudnąć 10 kilogramów",
        date: "2022-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "jeszcze raz pomalować dom",
        date: "2022-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "fryzjer!!!",
        date: "2022-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "nie odbierać poleconego od komornika",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // });
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
