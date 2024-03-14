// fetch API (https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

// giphy api (https://developers.giphy.com/)

const apiKey = 'Ho51Dc0beMaMoLFsb14AVa96Np4lEcM0';

// request GET
const req = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

/* req
  .then((res) => {
    // console.log(res);
    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch(console.warn); */

// concat promises

req
  .then((res) => res.json())
  .then(({ data }) => {
    // console.log(data.images.original.url);
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
