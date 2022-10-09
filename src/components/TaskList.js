import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h2 className="active__header">Zadania do zrobienia:</h2>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>
      <div className="done">
        <h3 className="done__header">Zadania zrobione: {done.length}</h3>

        {done.length > 5 && (
          <span style={{ fontSize: "15px" }}>
            Wyswietlone jest jedynie 5 zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
