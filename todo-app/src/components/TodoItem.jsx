const TodoItem = ({ todo, index, removeTodo }) => {
    return (
      <div className="todo-item">
        <span>{todo}</span>
        <button onClick={() => removeTodo(index)}>❌</button>
      </div>
    );
  };
  
  export default TodoItem;
  