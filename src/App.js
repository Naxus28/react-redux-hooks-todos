import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { getTodos, addTodo, deleteTodo } from "./actions/todosActions";

function App() {
  const todos = useSelector(state => state.todos).todos;
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(getTodos()) 
  }, [dispatch]);

  const addItem = todo => dispatch(addTodo(todo));

  const deleteItem = id => dispatch(deleteTodo(id));

  // const toggleTodo = id => {
  //   const updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.active = !todo.active;
  //     }

  //     return todo;
  //   });
  // };


  return (
    <div className="App">
      <h1>Todo List</h1>
      {todos.processing ? (
        <p>Loading todos...</p>
      ) : (
        <>
          <TodoForm addTodo={addItem} />
          <TodoList
            todos={todos}
            // toggleTodo={toggleTodo}
            deleteTodo={deleteItem}
          />
        </>
      )}
    </div>
  );
}

export default App;