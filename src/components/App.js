import React, { useState } from "react";
import TaskList from "./TaskList";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import { CATEGORIES, TASKS } from "../data";

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredTasks, setFilteredTasks] = useState(TASKS); // Manage filtered tasks separately

  // Handle category selection and filter tasks
  const handleCategoryChange = (category) => {
    if (category === "All") {
      setFilteredTasks(tasks); // Show all tasks if 'All' is selected
    } else {
      setFilteredTasks(tasks.filter((task) => task.category === category)); // Filter by category
    }
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, { ...newTask, id: Date.now() }];
      setFilteredTasks(updatedTasks); // Ensure the new task is also in the filtered list
      return updatedTasks;
    });
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks); // Update filtered tasks as well
  };

  return (
    <div>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <TaskList tasks={filteredTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default App;
