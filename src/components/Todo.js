import React from "react";
import cn from "classnames";

const Todo = ({ todo, toggleTodo }) => (
  <li>
    <p
      className={cn({ completed: !todo.active }, "todo")}
      onClick={() => toggleTodo(todo.id)}
    >
      {todo.item}
    </p>
    <span>X</span>
  </li>
);

export default Todo;