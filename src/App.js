import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { baseUrl } from './config/global.config';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const response = await axios(`${baseUrl}/todos`);
      setTodos(response.data);
    }

    fetchTodos();
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

  const addTodo = async(todo) => {
    const response = await axios.post(`${baseUrl}/todos`, todo);
    setTodos(response.data);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
