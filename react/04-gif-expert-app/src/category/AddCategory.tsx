// rafc + Tab --> React Arrow Function Component snippet

import { ChangeEvent, FormEvent, useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('foo');

  const onInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    // event.target.value --> value updated
    setInputValue(value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    /* In this case, we could omit fragments (<>) because there is no more than one equal element (in this case form) that is going to be the root node.  */
    <form onSubmit={(event) => onSubmit(event)}>
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
