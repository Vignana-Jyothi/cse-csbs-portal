import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => setTodos([...todos, text]);

  const removeTodo = (indexToRemove) =>
    setTodos(todos.filter((_, index) => index !== indexToRemove));

  return (
    <div className="app">
      <h1>📝 My TODO Application</h1>
      
      <TodoForm addTodo={addTodo} />
      <h4>List of ur works</h4>
      <TodoList todos={todos} removeTodo={removeTodo} />

    </div>
  );
};

export default App;
