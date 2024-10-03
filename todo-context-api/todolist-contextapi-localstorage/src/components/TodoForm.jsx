import React, { useState } from 'react';
import { useTodo } from '../components/TodoContext';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="todo-form">
      <input
        type="text"
        placeholder="Write Todo..."
        className="todo-input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
