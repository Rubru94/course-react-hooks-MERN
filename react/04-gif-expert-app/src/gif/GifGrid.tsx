import { useEffect } from 'react';
import { getGifs } from './gif.service';

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <div key={category}>
        <h3>{category}</h3>
        <p>{category}</p>
      </div>
    </>
  );
};
