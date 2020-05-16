import React, { useState, useEffect, useContext } from 'react';
import { Button, Typography } from '@material-ui/core';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import BackgroundIcon from './icons/BackgroundIcon';

import { ThemeContext } from './context/theme-context';

const TODO_LIST_KEY = 'todo-list';

function App() {
  const theme = useContext(ThemeContext);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem(TODO_LIST_KEY));
    if (localTodos) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_LIST_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(newTodos);
  };

  const deleteAll = (todoId) => {
    setTodos([]);
  };

  const toggleDone = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      }),
    );
  };

  return (
    <div className='App'>
      <div className='title'>
        <Typography variant='h2'>TODO</Typography>
      </div>
      <BackgroundIcon height={300} />
      <div className='row'>
        <TodoForm addTodo={addTodo} />
        <Button onClick={() => deleteAll()}>Delete all</Button>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
