import { useEffect, useState } from 'react';
import { getGifs } from './gif.service';
import { GifItem, GifItemProps } from './GifItem';

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
      {/* <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div> */}

      <div className="card-grid">
        {images.map((image: GifItemProps) => (
          <GifItem
            key={image.id}
            {...image} /* send all properties using spread operator */
          />
        ))}
      </div>
    </>
  );
};
