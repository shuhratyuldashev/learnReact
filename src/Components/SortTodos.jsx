import React from 'react';

const SortTodos = ({ options, value, onChange }) => {
  return (
    <div>
      <span>Sort</span>
      <select 
        value={value}
        onChange={event => onChange(event.target.value)} 
      >
        <option value="">By</option>
        {options.map(option =>
          <option key={option.value} value={option.value}>{option.name}</option>
        )}
      </select>
    </div>
  );
};

export default SortTodos;
