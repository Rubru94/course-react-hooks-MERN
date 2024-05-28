import { MouseEvent } from 'react';

export interface CounterAppProps {
  value?: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {
  /* const handleAdd = (event: MouseEvent, value: number) => {
    console.log(value);
  }; */

  const handleAdd = (event: MouseEvent) => {
    if (value) value += 1;
    console.log(event);
    console.log(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {value} </h2>
      {/* equivalent --> it can be simplified by leaving only the reference to the function that will receive the same arguments in same order */}
      {/* <button onClick={(event) => handleAdd(event)}>+1</button> */}
      <button onClick={handleAdd}>+1</button>

      {/* <button onClick={(event) => handleAdd(event, 1)}>+1</button> */}
    </>
  );
};
