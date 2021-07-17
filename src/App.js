import "./App.css";
import Header from "./MyComponents/Header";
import ToDo from "./MyComponents/toDo";
import ToDoItem from "./MyComponents/toDoItem";
import Footer from "./MyComponents/footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./MyComponents/addTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./MyComponents/About";
import axios from './axios' ;
import Pusher from 'pusher-js' ;

function App() {

  const [todos, setTodos] = useState([]); 

  useEffect(()=>{

    axios.get('/todos/sync').then((response) => {
      setTodos(response.data) ; 
    });
    
  },[])

  useEffect(()=>{
    
    var pusher = new Pusher('51889b1356317c552bd2', {
      cluster: 'ap2'
     });
  
    var channel = pusher.subscribe('todosChannel');
    channel.bind('inserted', (newTodo) =>
    {
     setTodos([...todos,newTodo]) ; 
    });

    return ()=>{
      channel.unbind_all(); 
      channel.unsubscribe() ; 
    }

  },[todos]) ;

  console.log(todos) ; 

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
                  <AddTodo />
                  <ToDo todos={todos} />
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
