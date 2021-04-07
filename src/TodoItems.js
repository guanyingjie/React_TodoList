import React, { Component } from "react";

class TodoItems extends React.Component{
    constructor(props){
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }
    createTasks(Item){
        return <li onClick={()=> this.delete(Item.key)} key={Item.key}>{Item.text}</li>
    }
    delete(key){
        this.props.delete(key);
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