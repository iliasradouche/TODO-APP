import React from 'react'

export const Todo = ({todo,onDelete}) => {
  return (
    <div>
      <h3>{todo.sr}</h3>
      <h4>{todo.title}</h4>
      <button className="btn btn-sm  btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}
