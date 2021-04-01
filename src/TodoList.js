import React, { Component } from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(event) {
    console.log(this._inputElement.value);
    if (this._inputElement.value !== " ") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });
      this._inputElement.value = " ";
    }

    console.log(this.state.items);
    event.preventDefault();
    //if inputvalue!=null 新增item，
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
// eslint-disable-next-line
export default TodoList;

//在表单加一个监听事件，在类组件定义这个监听事件，
