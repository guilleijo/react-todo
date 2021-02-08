import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    text: '',
    done: false,
  });

  const handleTextChange = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.text.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, text: '' });
    }
  };

  return (
    <form className='flex flex-col md:flex-row flex-1 md:space-x-2 justify-end h-8 space-y-2 md:space-y-0' onSubmit={handleSubmit}>
      <input
        className='w-full rounded-lg p-3 shadow-md'
        label='Text'
        type='text'
        name='text'
        value={todo.text}
        onChange={handleTextChange}
      />
      <button
        type='submit'
        className="bg-indigo-100 hover:bg-indigo-200 transform hover:scale-110 transition duration-150 ease-in-out rounded-lg text-gray-700 px-2"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
