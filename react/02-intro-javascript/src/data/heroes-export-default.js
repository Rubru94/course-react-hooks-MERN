const heroes = [
  {
    id: 1,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 2,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 3,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 4,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Flash',
    owner: 'DC',
  },
];

export const owners = ['DC', 'Marvel'];

export default heroes;

// same result

// const owners = ['DC', 'Marvel'];
// export { heroes as default, owners };
