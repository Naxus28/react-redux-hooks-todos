import React, { useState } from "react";
import uuid from "uuid";

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
      <label htmlFor="todo-input">Add todo: </label>
      <input type="text" id="todo-input" value={todo} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
};

export default TodoForm;