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
    <>
      <ListItem>
        <Checkbox checked={todo.done} onClick={handleToggle} />
        <Typography
          variant='body1'
          style={{
            textDecoration: todo.done ? 'line-through' : null,
          }}
        >
          {todo.text}
        </Typography>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
};

export default Todo;
