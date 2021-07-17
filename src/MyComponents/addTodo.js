import React, { useState } from 'react';
import axios from '../axios' ;

export default function AddTodo(props) {

  const [title,setTitle] = useState('') ; 
  const [desc,setDesc] = useState("") ;

  const addTodo = async (e) => { 

    e.preventDefault() ; 

    await axios.post('/todos/new',{
      title: title,
      desc: desc
    })

    setDesc('') ; 
    setTitle('') ; 

  }


  return (
    <div className="container my-3">
        
        <h3 className="text-center">Add a Task</h3> 

      <form>
        
        <div className="mb-3">

          <label htmlFor="title" className="form-label">
            ToDo Title
          </label>

          <input
            type="text"
            className="form-control"
            value={title} 
            onChange={(e)=> setTitle(e.target.value)}
            id="title"
            aria-describedby="emailHelp"
          />

        </div>

        <div className="mb-3">

          <label htmlFor="desc" className="form-label">
            Make a descriptive note of your task
          </label>

          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e)=> setDesc(e.target.value)}
            id="desc"
          />

        </div>

        <button type="submit" className="btn btn-primary" onClick={addTodo} >
          Add
        </button>

      </form>
    </div>
  );
}
