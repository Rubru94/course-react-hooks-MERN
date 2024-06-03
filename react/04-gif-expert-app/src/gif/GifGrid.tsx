import { useEffect, useState } from 'react';
import { getGifs } from './gif.service';

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  // useEffect can never be async. It always returns a function
  useEffect(() => {
    /* getGifs(category).then((newImages) => setImages(newImages)); */ // is valid use then to resolve promise
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ol>
    </>
  );
};
