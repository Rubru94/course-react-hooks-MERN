export interface FirstAppProps {
  title: string;
  subtitle?: string;
  num: number;
}

export const FirstApp = ({ title, subtitle = 'default', num }: FirstAppProps) => {
  // console.log(props);

  /* if (!title) {
    throw new Error('Prop title not exist !');
  } */

  return (
    <>
      <h1>First app</h1>
      <p>{title}</p>
      <p>{subtitle}</p>
      <p>{num}</p>
      {/* You cannot print objects directly in react (you can use JSON.stringify), nor async function results. */}
      {/* <code>{JSON.stringify(objMessage)}</code> */}
    </>
  );
};
