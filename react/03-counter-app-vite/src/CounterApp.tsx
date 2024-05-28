import { useState } from 'react'; // nomenclature --> if it starts with "use" it is a hook

export interface CounterAppProps {
  value?: number;
}

export const CounterApp = ({ value }: CounterAppProps) => {
  console.log('render'); // When status changes, the component is executed again

  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleSubtract = () => setCounter(counter - 1);

  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      {/* equivalent --> it can be simplified by leaving only the reference to the function that will receive the same arguments in same order */}
      {/* <button onClick={(event) => handleAdd(event)}>+1</button> */}
      <button onClick={handleAdd}> +1 </button>
      <button onClick={handleSubtract}> -1 </button>
      <button onClick={handleReset}> Reset </button>

      {/* <button onClick={(event) => handleAdd(event, 1)}>+1</button> */}
    </>
  );
};
