import React from 'react';

function Task({ task, toggleComplete }) {
  return (
    <li className="task">
      <div className="task-title">{task.title}</div>
      <div className="task-description">{task.description}</div>
      <div className="task-status" onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Completed' : 'Incomplete'}
      </div>
    </li>
  );
}

export default Task;