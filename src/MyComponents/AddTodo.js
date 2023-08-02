import React from 'react'
import { useState } from 'react';


export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("")
    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or Desc required");
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
  return (
      <div className='container my-5'>
        <h3>Add Todo list</h3>
          <form onSubmit={submit}>
              <div className="mb-3">
                  <label htmlFor="title" className="form-label">Todo title</label>
                  <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                      
              </div>
              <div className="mb-3">
                  <label htmlFor="desc" className="form-label">Description</label>
                  <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="edesc"/>
              </div>
              <button type="submit" className="btn btn-sm btn-primary">Add todo</button>
          </form>
      </div>
  )
}
