import React, { useState, useEffect, useRef } from 'react';
import "./compoments/style.css";
import TaskForm from './compoments/TaskForm';
import TaskList from './compoments/TaskList';

function App() {
  
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    inputRef.current.focus();
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className='homepage'>
      <h1>Task Tracker Application Objective</h1>
      <TaskForm addTask={addTask} inputRef={inputRef} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} />
    </div>
  
  );
 
}

export default App;