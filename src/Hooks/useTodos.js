import { useMemo } from 'react'

export const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return todos;
  }, [sort, todos]);
  return sortedTodos
}

export const useSortedAndSearchedTodos = (todos, sort, input) =>{
    const sortedTodos = useSortedTodos(todos, sort)
    
    const sortedAndSearchedTodos = useMemo(() => {
        return sortedTodos.filter(todo =>
          todo.title.toLowerCase().includes(input.toLowerCase())
        );
      }, [input, sortedTodos]);
      
      return sortedAndSearchedTodos
}

