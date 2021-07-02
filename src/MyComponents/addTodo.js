import React, { useState } from 'react';

export default function AddTodo(props) {

    const [title, settitle] = useState("") ; 

    const [desc, setdesc] = useState("") ; 


    const submit =  (e) => {

        e.preventDefault() ; 

        if(!title || !desc) {
            alert('Title or Desc can not be blank!!') ; 
        }
        else{
        props.addTodo(title, desc) ;
        settitle("") ; 
        setdesc("") ;
        }
    } 

  return (
    <div className="container my-3">
        
        <h3 className="text-center">Add a Task</h3> 

      <form onSubmit={submit} >
        
        <div className="mb-3">

          <label htmlFor="title" className="form-label">
            ToDo Title
          </label>

          <input
            type="text"
            value={title}
            onChange = { (e) => settitle(e.target.value) } 
            className="form-control"
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
            value={desc}
            onChange = { (e) => setdesc(e.target.value) }
            className="form-control"
            id="desc"
          />

        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>

      </form>
    </div>
  );
}
