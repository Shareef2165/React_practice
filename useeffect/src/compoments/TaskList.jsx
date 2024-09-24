import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleComplete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleComplete={toggleComplete} />
      ))}
    </ul>
  );
}

export default TaskList;