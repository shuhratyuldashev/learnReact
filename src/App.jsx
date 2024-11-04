import React, { useEffect, useState } from 'react';
import './App.css';

import TodosList from './Components/TodosList';
import AddTodo from './Components/AddTodo';
import PostFilter from './Components/PostFilter';
import MyModal from './UI/MyModal/MyModal';

import { useSortedAndSearchedTodos } from './Hooks/useTodos';
import { useFetching } from './Hooks/useFetching'

import TodosService from './API/TodosService';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ sort: '', input: '' });
  const [modal, setModal] = useState(false);
 
  const [fetchTodos, loading, todoEror] = useFetching(async () => {
    const todos = await TodosService.getAll();
    setTodos(todos)
  })

  useEffect(() =>{
    fetchTodos()
    console.log("popitka")
  }, [])

  const sortedAndSearchedTodos = useSortedAndSearchedTodos(todos, filter.sort, filter.input);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setModal(false);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };


  return (
    <div className="App">
      <button style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Add a Post
      </button>
      <MyModal visible={modal} setVisible={setModal}>
        <AddTodo todos={todos} create={createTodo} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {todoEror &&
        <h1>Error: {todoEror}</h1>
      }
      {loading
      ? <h1>Loading...</h1>
      :  <TodosList removeTodo={removeTodo} todos={sortedAndSearchedTodos} title="Todos List" />
      }
    </div>
  );
}

export default App;
