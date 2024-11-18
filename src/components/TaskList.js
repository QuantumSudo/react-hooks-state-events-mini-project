import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <Task text={task.text} category={task.category} onDelete={() => onDeleteTask(task.id)} />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
