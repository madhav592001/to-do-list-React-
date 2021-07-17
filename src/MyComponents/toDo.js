import React from "react";
import ToDoItem from "./toDoItem";


export default function ToDo(props) {
  let myStyle = { 
    minHeight : "38vh" ,  
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center"> task list </h3>

      {props.todos.length === 0    // ternary operator
        ? "No ToDo's to display"
        : props.todos.map((todo) => {
            return (
              <>
              <ToDoItem todo = {todo} />
              <hr />
              </>
            );
          })}
    </div>
  );
}
