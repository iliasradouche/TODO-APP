import React from 'react'
import  {Todo}  from './Todo'; 
export const Todos = (props) => {
let todoStyle={
    minHeight : "70vh",
    margin : "50px auto"
}

  return (
    <div className="container " style={todoStyle}>
      <h3 className=' my-4'>Todos List</h3>
      {props.todo.length===0? "No todos to display" :
        props.todo.map((todo)=>{
          return(
            <>
            <Todo todo={todo} key={todo.sr} onDelete={props.onDelete} />
            <hr/>
            </>
          )
        })
      }

    </div>
  )
}
