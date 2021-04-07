import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem(this);
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

  deleteItem(event){

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
        <div>
          <TodoItems entries={this.state.items}  delete = {this.deleteItem}
          />
        </div>
      </div>
    );
  }
}
// eslint-disable-next-line
export default TodoList;

//在表单加一个监听事件，在类组件定义这个监听事件，
//移除物品，首先编写delete函数，在todoitem组建中定义，然后todo
//list组件中调用，接下来在todolist中定义deleteitem函数，实现删除功能，
