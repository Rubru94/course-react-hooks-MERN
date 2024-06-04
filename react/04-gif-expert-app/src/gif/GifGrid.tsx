import { GifItem, GifItemProps } from './GifItem';
import { useFetchGifs } from './hooks/useFetchGifs.hook';

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const { images, isLoading } = useFetchGifs(category); // custom hook

  return (
    <>
      <h3>{category}</h3>
      {/*  {isLoading ? <h2>Loading ...</h2> : null}  null is not rendered */}
      {isLoading && <h2>Loading ...</h2>} {/* logic AND */}
      {/* <div className="card-grid">
        {images.map(({ id, title, url }) => (
          <GifItem key={id} id={id} title={title} url={url} />
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
