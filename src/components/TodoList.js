import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.length ? (
        <ul>
          {todos.map(todo => (
            <Todo
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              key={todo.id}
            />
          ))}
        </ul>
      ) : (
        <p>No todos yet :)</p>
      )}
    </div>
  );
};

export default TodoList;