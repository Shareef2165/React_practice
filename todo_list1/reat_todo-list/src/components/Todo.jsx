import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]); 
      setNewTask('');
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const handleEditTask = (id) => {
    setIsEditing(true);
    setEditingTaskId(id);
    setNewTask(tasks.find((task) => task.id === id).title);
  };

  const handleSaveEdit = () => {
    if (newTask.trim() !== '') {
      setTasks(tasks.map((task) => (task.id === editingTaskId ? { ...task, title: newTask } : task)));
      setIsEditing(false);
      setEditingTaskId(null);
      setNewTask('');
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setIsEditing(false);
    setEditingTaskId(null);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder={isEditing ? "Edit task" : "Add new task"}
        />
        <button onClick={isEditing ? handleSaveEdit : handleAddTask}>
          {isEditing ? "Save" : "Add"}
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(task.id)} />
            <span>{task.title}</span>
            <button onClick={() => handleEditTask(task.id)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
