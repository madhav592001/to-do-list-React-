import React from 'react'

export default function footer() {
    let footerStyle =  {
        position : "relative" ,
        top : "20vh" , 
        width : "100%" ,
        border : "3px solid red"
    }
    return (
        <div className="bg-dark text-light text-center py-2 my-3"  style = {footerStyle} >
            Copyright &copy; MyTodosList.com
        </div>
    )
}
