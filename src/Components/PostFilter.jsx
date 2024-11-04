import React from 'react'
import SortTodos from './SortTodos'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
         <input
        value={filter.input}
        onChange={e => setFilter({...filter, input: e.target.value})}
        placeholder='Search'
        type="text"
      />
      <SortTodos
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        options={[
          { value: 'title', name: 'By Title' },
          { value: 'body', name: 'By Body' }
        ]}
      />
    </div>
  )
}

export default PostFilter