import { useEffect, useState } from 'react';
import { getGifs } from '../gif.service';

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  // useEffect can never be async. It always returns a function
  useEffect(() => {
    /* getGifs(category).then((newImages) => setImages(newImages)); */ // is valid use then to resolve promise
    getImages();
  }, []);

  return { images, isLoading };
};
