// promises (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)

import { getHeroById } from './08-import-export';

export const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const h1 = getHeroById(id);
      if (h1) resolve(h1);
      reject(`Hero ${id} not found`);
    }, 1000);
  });
};
