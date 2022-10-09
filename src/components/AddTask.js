import React, { Component } from "react";
import "./AddTask.css";
class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, date, important } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, important);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      }
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <div className="form__header">
          <input
            type="text"
            value={this.state.text}
            placeholder="Dodaj zadanie"
            onChange={this.handleText}
          />
          <input
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="important">Priorytet </label>
        </div>

        <div className="form__header">
          <label htmlFor="date"> Do kiedy zrobić:</label>
          <input
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
        </div>
        <button className="form__button" onClick={this.handleClick}>
          Dodaj
        </button>
      </div>
    );
  }
}

export default AddTask;
