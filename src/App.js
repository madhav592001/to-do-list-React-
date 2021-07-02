import "./App.css";
import Header from "./MyComponents/Header";
import ToDo from "./MyComponents/toDo";
import ToDoItem from "./MyComponents/toDoItem";
import Footer from "./MyComponents/footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/addTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./MyComponents/About";

function App() {
  let initTodo; // this is to pass if storage is null and show on reload if any task is pushed . this will get item by parsing .

  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos")); // if we reload page then previous todos can come if we store them .
  }

  const [todos, setTodos] = useState(initTodo); // initialized the todos list

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // if any changes is made in todo then this will run to stringify data and store in local storage

  //  function of deleting a to-do task

  const ondelete = (todo) => {
    // console.log("i am Deleted ", todos);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    // localStorage.setItem("todos",JSON.stringify(todos)) ;          // we store them using this    we used use effect that's why we don't have to use this
  };

  // deleting this way in react does not work
  // let index = todos.indexOf(todo) ;
  // todos.splice(index,1) ;

  // Function of adding a task

  const addTodo = (title, desc) => {
    // console.log("I am adding a task");                          // this is for debugging purpose .

    let sno;

    if (todos.length == 0) {
      sno = 1;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]); // we made my todo and add it in the list of todos
    console.log(myTodo); // this is for the debugging
  };

  return (
    <div>
      <Router>
        <Header title="My Todo's list " searchBar={true} />

        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <ToDo todos={todos} ondelete={ondelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
