// rafc + Tab --> React Arrow Function Component snippet

import { ChangeEvent, FormEvent, useState } from 'react';

interface AddCategoryProps {
  onNewCategory: React.Dispatch<string>;
}

export const AddCategory = ({ onNewCategory }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    // event.target.value --> value updated
    setInputValue(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Avoid reload on each form submit
    const value = inputValue.trim();
    if (value.length < 1) return;
    onNewCategory(value);
    setInputValue('');
  };

  return (
    /* In this case, we could omit fragments (<>) because there is no more than one equal element (in this case form) that is going to be the root node.  */
    <form onSubmit={onSubmit}>
      {/* <form onSubmit={(event) => onSubmit(event)}> */} {/* equivalent */}
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        /* onChange={(event) => onInputChange(event)} */
        /* equivalent */
        onChange={onInputChange}
      />
    </form>
  );
};
