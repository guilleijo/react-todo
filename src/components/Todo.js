import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({ todo, deleteTodo, toggleDone }) => {
  const handleToggle = () => {
    toggleDone(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div className='flex items-center mt-2 bg-white rounded-lg shadow-lg p-2'>
      <div onClick={handleToggle} className='flex items-center cursor-pointer'>
        <Checkbox checked={todo.done} />
        <div className={`pr-2 text-sm ${todo.done && 'line-through'}`}>
          {todo.text}
        </div>
      </div>
      <div
        className='ml-auto mr-2 h-5 transform hover:scale-110 transition duration-150 ease-in-out cursor-pointer'
        onClick={handleDelete}
      >
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </div>
  );
};

export default Todo;
