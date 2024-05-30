// https://developers.giphy.com/ >> Docs >> Create an Api key

export const getImage = async () => {
  try {
    const apiKey = 'Ho51Dc0beMaMoLFsb14AVa96Np4lEcM0';
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await res.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    // console.error(error);
    return 'Image not found';
  }
};
