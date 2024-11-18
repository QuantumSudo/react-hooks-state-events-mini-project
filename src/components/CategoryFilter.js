import React, { useState } from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default to 'All'

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category); // Notify parent about the category change
  };

  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? 'selected' : ''}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
