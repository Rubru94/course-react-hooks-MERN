export interface GifItemProps {
  id?: string;
  title: string;
  url: string;
}

export const GifItem = ({ id, title, url }: GifItemProps) => {
  console.log({ id, title, url });

  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
};
