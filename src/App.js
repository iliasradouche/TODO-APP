import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("On delete", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

    localStorage.setItem("todos", JSON.stringify(todos));
  }


  const addTodo = (title, desc) => {
    console.log("Adding Todo to Todos list", title, desc);
    let sr;
    if (todos.length === 0) {
      sr = 1;
    }
    else {
      sr = todos[todos.length - 1].sr + 1;
    }
    const myTodo = {
      sr: sr,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos])
  return (
    <>
      <BrowserRouter>
      <Header searchBar={false}/>
        <Routes>
          <Route path="/" element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todo={todos} onDelete={onDelete} />
            </>
          }></Route>
        <Route exact path="/about" element={<About/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
