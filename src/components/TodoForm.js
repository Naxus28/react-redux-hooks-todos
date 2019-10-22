import React, { useState } from 'react';
import uuid from 'uuid';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!todo.trim()) return;

    addTodo({
      item: todo,
      active: true,
      id: uuid()
    });

    setTodo('');
  };

  const handleChange = e => {
    setTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" placeholder="Add todo" value={todo} onChange={handleChange} />
      <input type="submit" value="Submit"/>
    </form>
  );
};

export default TodoForm;