import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <p className="task__paragraph">
          <strong style={important ? style : null}>{text}</strong> - do
          <span>{date} </span>
          <span className="task_button--group">
            <button className="task__button" onClick={() => props.change(id)}>
              Zostało zrobione
            </button>
            <button className="task__button" onClick={() => props.delete(id)}>
              Usuń
            </button>
          </span>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <div className="task">
        <p className="task__paragraph">
          <strong>{text}</strong> - do
          <em>(Zrobić do {date}) </em>
          <span className="task_button--group">
            - potwierdzenie wykonania <span> {finish}</span>
            <button className="task__button" onClick={() => props.delete(id)}>
              X
            </button>
          </span>
        </p>
      </div>
    );
  }
};

export default Task;
