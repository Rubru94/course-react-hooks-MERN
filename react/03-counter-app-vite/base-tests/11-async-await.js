// async - await

// const getImagePromise = () => new Promise((resolve) => resolve('image'));
// getImagePromise().then(console.log)

// async

/* const getImage = async () => {
  return 'image';
};
getImage().then(console.log); */

/* const getImage = async () => {
  const apiKey = 'Ho51Dc0beMaMoLFsb14AVa96Np4lEcM0';
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  const { data } = await res.json();
  const { url } = data.images.original;

  const img = document.createElement('img');
  img.src = url;
  document.body.append(img);
}; */

// To handle errors in an async function, use try-catch.

const getImage = async () => {
  try {
    const apiKey = 'Ho51Dc0beMaMoLFsb14AVa96Np4lEcM0';
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await res.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage();
