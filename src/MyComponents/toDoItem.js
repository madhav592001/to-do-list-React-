import React from 'react'

export default function toDoItem( {todo} )  {    // yaha par hamne direct props pass kar diye ha taaki props.                                                         laga kar na likhna na pade

    return (
        <div>

            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>

        </div>
    )
}





