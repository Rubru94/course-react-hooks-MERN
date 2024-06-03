import { useState } from 'react';
import { AddCategory } from './category/AddCategory';

export const GifExpertApp = () => {
  // useContextSnippet + Tab
  const [categories, setCategories] = useState([
    'Metal Gear Solid',
    'Final Fantasy',
  ]);

  // Hooks must not be created according to conditions
  /* if (true) {
    const [categoriesNew, setCategoriesNew] = useState(['Metal Gear Solid']);
  } */

  const onAddCategory = () => setCategories([...categories, 'foo']);
  // equivalent
  // const onAddCategory = () => setCategories((cat) => [...cat, 'foo']); // with callback

  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories}></AddCategory>

      <button onClick={onAddCategory}>Add</button>
      {/* <button onClick={(event) => onAddCategory(event)}>Add</button> */}

      {/* Items list */}
      {/* Item */}
      <ol>
        {categories.map((cat, index) => (
          <li key={`${index}-${cat}`}>{cat}</li>
        ))}
      </ol>
    </>
  );
};
