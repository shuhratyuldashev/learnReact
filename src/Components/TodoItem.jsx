import React from 'react';

const TodoItem = ({ todo, remove }) => {
  return (
    <div className='TodoCard'>
      <div className="todo-main">
        <h1>{todo.title}</h1>
        <p>{todo.body}</p>
      </div>
      <div className="btn">
        <button onClick={() => remove(todo)} className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
