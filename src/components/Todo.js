import React from "react";
import cn from "classnames";

const Todo = ({ todo, toggleTodo, deleteTodo }) => (
  <li>
    <p
      className={cn({ completed: !todo.active }, "todo")}
      onClick={() => toggleTodo(todo)}
    >
      {todo.item}
    </p>
    <span onClick={() => deleteTodo(todo.id)}>X</span>
  </li>
);

export default Todo;