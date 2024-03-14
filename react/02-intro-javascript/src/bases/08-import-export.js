// Import & export

// imp + [tab] // snippet shorcut
import { heroes } from '../data/heroes';

// Multiple & default export

// When exporting with default, you can name the import as you wish.
// It is possible to mix default exports with individual exports within the same file ({ }).

import heroesDefault, { owners } from '../data/heroes-export-default';

console.log(heroes);

// const getHeroById = (id) => heroes.find((hero) => hero.id === id); // (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
export const getHeroById = (_id) => heroes.find(({ id }) => id === _id);
console.log(getHeroById(2));

// The find() method returns the value of the first element of the array that satisfies the provided test function.
// Necessary  to use filter()

export const getHeroByOwner = (owner) =>
  heroes.filter((hero) => hero.owner === owner);
console.log(getHeroByOwner('DC'));

console.log(heroesDefault);
console.log(owners);
