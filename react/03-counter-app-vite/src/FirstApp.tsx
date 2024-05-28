const objMessage = {
  message: 'Hello world !!',
  title: 'Greeting',
};

const getMessage = (msg?: string): string => {
  return msg ?? objMessage.message;
};

const getResult = (a: number, b: number): number => {
  return a + b;
};

export const FirstApp = () => {
  return (
    <>
      <h1>First app</h1>
      <h2>Message: {getMessage('Hi')}</h2>
      <h3>Result: {getResult(2, 5)}</h3>
      {/* You cannot print objects directly in react (you can use JSON.stringify), nor async function results. */}
      {/* <code>{JSON.stringify(objMessage)}</code> */}
      <p>Subtitle</p>
    </>
  );
};
