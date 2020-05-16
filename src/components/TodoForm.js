import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Button, TextField } from '@material-ui/core';

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
    <form className='todo-form' onSubmit={handleSubmit}>
      <TextField
        label='Text'
        type='text'
        name='text'
        value={todo.text}
        onChange={handleTextChange}
      />
      <Button type='submit'>Add</Button>
    </form>
  );
};

export default TodoForm;
