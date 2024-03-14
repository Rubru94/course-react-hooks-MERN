// objects

const person = {
  name: 'John',
  surname: 'Doe',
  age: 45,
  address: { city: 'New York', zip: 118610, lat: 15.664541, lng: 18.468767 },
};

// console.table({ person });
console.log({ person });

// clone

// const newPerson = person; // assignment reference !! - not cloning the object
const newPerson = { ...person }; // spread operator

console.log({ newPerson });
