import React, { Component } from "react";

class TodoItems extends React.Component{
    createTasks(Item){
        return <li key={Item.key}>{Item.text}</li>
    }
    render(){
        var todoentries = this.props.entries;
        var listItems = todoentries.map(this.createTasks);
        return(
            <ul className="thelist">
                {listItems}
            </ul>
        );
    }
};

export default TodoItems;