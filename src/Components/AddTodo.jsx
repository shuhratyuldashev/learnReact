import React, { useState } from 'react'

const AddTodo = ({ create, todos }) => {
  const [todo, setTodo] = useState({ title: '', body: ''})



  const AddTodos = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: todos.length + 1
    }
    create(newTodo)
    setTodo({title: '', body: ''});
  };


  return (
    <form action="" className="todoForm">
        <input 
            required
            value={todo.title}
            onChange={e => setTodo({...todo, title: e.target.value})} 
            placeholder='title' 
            type="text" />

        <input 
            required
            value={todo.body}
            onChange={e => setTodo({...todo, body: e.target.value})} 
            placeholder='text' 
            type="text" />
        <button onClick={AddTodos} className="todoFormButton">
            Add todo
        </button>
  </form>   
  )
}

export default AddTodo