import { useState } from 'react';
import { AddCategory } from './category/AddCategory';
import { GifGrid } from './gif/GifGrid';

export const GifExpertApp = () => {
  // useContextSnippet + Tab
  const [categories, setCategories] = useState(['Metal Gear Solid']);

  // Hooks must not be created according to conditions
  /* if (true) {
    const [categoriesNew, setCategoriesNew] = useState(['Metal Gear Solid']);
  } */

  const isValidCategory = (category: string): boolean => {
    return categories
      .map((c) => c.toLowerCase())
      .includes(category.toLowerCase());
  };

  const onAddCategory = (newCategory: string) => {
    if (isValidCategory(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // equivalent
    /* const onAddCategory = () => setCategories((cat) => [...cat, 'foo']); */ // with callback
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value: string) => onAddCategory(value)}
      ></AddCategory>

      {/* <button onClick={onAddCategory}>Add</button> */}
      {/* <button onClick={(event) => onAddCategory(event)}>Add</button> */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
