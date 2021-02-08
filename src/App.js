import React, { useState, useEffect, useContext } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


const TODO_LIST_KEY = 'todo-list';

function App() {
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
    <div className='flex flex-col min-h-screen items-center py-24 px-8 space-y-3 bg-gray-100 text-md'>
      <div className='text-gray-700 text-lg tracking-wider'>TODO</div>
      <div className='flex flex-col md:flex-row w-full sm:w-2/3 lg:w-1/2 justify-between space-y-2 md:space-y-0 md:space-x-2'>
          <TodoForm addTodo={addTodo} />
          <button
            className="items-end bg-red-100 hover:bg-red-200 rounded-lg text-gray-700 px-2 transform hover:scale-110 transition duration-150 ease-in-out"
            onClick={() => deleteAll()}
          >
            Delete all
          </button>
      </div>
      <div className='w-full sm:w-2/3 lg:w-1/2 mt-2'>
        <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone} />
      </div>
    </div>
  );
}

export default App;
