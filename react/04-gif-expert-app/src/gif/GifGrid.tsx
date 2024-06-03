interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  return (
    <>
      <div key={category}>
        <h3>{category}</h3>
        <p>{category}</p>
      </div>
    </>
  );
};
