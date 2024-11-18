import React, { useState } from 'react';

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState(categories[0]); // Default to the first category

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTask = { text, category };
      onTaskFormSubmit(newTask);
      setText('');
      setCategory(categories[0]); // Reset the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-text">Details</label>
      <input
        id="task-text"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <label htmlFor="task-category">Category</label>
      <select
        id="task-category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.filter(cat => cat !== 'All').map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Add task</button>
    </form>
  );
};

export default NewTaskForm;
