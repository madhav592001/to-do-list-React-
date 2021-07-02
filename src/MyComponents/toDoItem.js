import React from 'react'

export default function toDoItem( {todos , ondelete } )  {    // yaha par hamne direct props pass kar diye ha taaki props.                                                         laga kar na likhna na pade

    return (
        <div>

            <h4>{todos.title}</h4>
            <p>{todos.desc}</p>
            <button className="btn btn-sm btn-danger" onClick = { () =>{ondelete(todos)}} >Delete</button>
        </div>
    )
}





