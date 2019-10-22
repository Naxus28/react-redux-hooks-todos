import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios('http://localhost:3003/todos');
      setTodos(response.data);
    }

    fetchData();
  },[]);

  useEffect(() => {
    
  },[todos]);

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.active = !todo.active;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }; 

  const addTodo = (todo) => {
    axios.post('http://localhost:3003/todos', todo)
      .then(function (response) {
        setTodos(response.data);
      })
      .catch(function (error) {
        console.dir(error);
      });
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
