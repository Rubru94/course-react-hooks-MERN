// rafc + Tab --> React Arrow Function Component snippet

import { ChangeEvent, FormEvent, useState } from 'react';

export interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = ({ setCategories }: AddCategoryProps) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    // event.target.value --> value updated
    setInputValue(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Avoid reload on each form submit
    if (inputValue.trim().length < 1) return;
    setCategories((categories) => [inputValue, ...categories]);
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
