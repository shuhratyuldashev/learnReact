import React from 'react';
import TodoItem from './TodoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const TodosList = ({ todos, title, removeTodo }) => {
  if (!todos.length) {
    return (
      <div>
        <h1 style={{ textAlign: 'center', fontSize: 50 }}>We have not Todos</h1>
      </div>
    );
  }

  return (
    <div className='Todo'>
      <h1 className='TitleTodos'>{title}</h1>
      <div>
        <TransitionGroup className='TodosList'>
          {todos.map((todo) => (
            <CSSTransition
              key={todo.id}
              timeout={500}
              classNames="todoTransition"
            >
              <TodoItem remove={removeTodo} todo={todo} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default TodosList;
