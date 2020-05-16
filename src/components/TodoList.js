import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleDone }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
};

export default TodoList;
