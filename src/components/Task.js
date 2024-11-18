import React from 'react';

const Task = ({ text, category, onDelete }) => (
  <div>
    <span>{text}</span>
    <span>{category}</span>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default Task;
