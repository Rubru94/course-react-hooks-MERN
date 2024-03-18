// promises (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

import { getHeroById } from './08-import-export';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('2 seconds');
    // resolve();

    // * Task
    const h1 = getHeroById(2);
    console.log(h1);

    resolve(h1);
  }, 2000);
});

promise.then((hero) => {
  //console.log('Promise then()');
  console.log('hero', hero);
});

const promiseReject = new Promise((resolve, reject) => {
  setTimeout(() => {
    const hero = getHeroById(2);
    console.log(hero);

    reject('Hero not found');
  }, 2000);
});

promiseReject
  .then((hero) => {
    console.log('hero', hero);
  })
  .catch((err) => console.warn(err));

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const h1 = getHeroById(id);
      if (h1) resolve(h1);
      reject('Hero not found');
    }, 2000);
  });
};

// In the case of use where the catch argument is sent to another function, as in the case of the console.error, it can be simplified by leaving only the reference to the function that will receive the first argument received by the catch.

getHeroByIdAsync(40)
  .then((hero) => console.log(hero))
  // .catch((err) => console.error(err));
  .catch(console.error);

getHeroByIdAsync(4).then(console.log).catch(console.error);
