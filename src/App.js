import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3003');
      const data = await response.json();
      setTodos(data);
    }

    fetchData();
  },[]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.active = !todo.active;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
