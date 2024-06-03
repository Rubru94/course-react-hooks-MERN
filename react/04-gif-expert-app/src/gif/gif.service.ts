const apiKey = 'Ho51Dc0beMaMoLFsb14AVa96Np4lEcM0';
const limit = 10;

interface giphyImage {
  id: string;
  title: string;
  images: { downsized_medium: { url: string } };
}

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }: giphyImage) => {
      return { id, title, url };
    }
  );
};
