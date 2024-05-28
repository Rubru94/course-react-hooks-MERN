// functions

// It is more advisable to declare functions as const to cause an error if overwritten with other values.

/* function greet(name) {
  return `Hi, ${name}`;
} */

const greet = function (name) {
  return `Hi, ${name}`;
};

// greet = 10;

const greetArrow = (name) => {
  return `Hi, ${name}`;
};

const greetArrowSimplified = (name) => `Hi, ${name}`;

console.log(greet);
console.log(greet('John'));
console.log(greetArrow('John'));
console.log(greetArrowSimplified('John'));

const getUser = () => {
  return { uid: 'ABC123', username: 'JD' };
};

// When it is not a primitive value, simplified return must be enclosed in brackets.
const getUserSimplified = () => ({ uid: 'ABC123', username: 'JD' });

console.log(getUser());
console.log(getUserSimplified());

// * Task

function getActiveUser(name) {
  return { uid: 'ZXC123', username: name };
}

const activeUser = getActiveUser('Fernando');
console.log(activeUser);

// 1. To arrow function
// 2. implicit object

const getActiveUserNew = (username) => ({ uid: 'ZXC123', username });
const activeUserNew = getActiveUserNew('Fernando');

console.log(activeUserNew);
