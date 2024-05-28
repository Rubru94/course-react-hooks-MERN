import { useState } from 'react'; // nomenclature --> if it starts with "use" it is a hook
import { MouseEvent } from 'react';

export interface CounterAppProps {
  value?: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      {/* equivalent --> it can be simplified by leaving only the reference to the function that will receive the same arguments in same order */}
      {/* <button onClick={(event) => handleAdd(event)}>+1</button> */}
      <button onClick={handleAdd}>+1</button>

      {/* <button onClick={(event) => handleAdd(event, 1)}>+1</button> */}
    </>
  );
};
