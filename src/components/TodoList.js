import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleDone }) => {
  return (
    <div>
      {todos.length ? todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      )) : <div className='text-center mt-24 text-gray-500'>No todos...</div>}
    </div>
  );
};

export default TodoList;
