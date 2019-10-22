import React from 'react';
import cn from 'classnames';

const Todo = ({ todo, toggleTodo }) => (
  <li
    className={cn({ completed: !todo.active }, 'todo')}
    onClick={() => toggleTodo(todo.id)}
  >
    {todo.item}
  </li>
);

export default Todo;