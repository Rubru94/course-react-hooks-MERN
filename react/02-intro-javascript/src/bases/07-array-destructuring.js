// Array destructuring

const characters = ['ladybird', 'wolf', 'hornet'];

// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);

// Array positions can be skipped using commas

const [char1] = characters;
const [, char2] = characters;
const [, , char3] = characters;

console.log(char1);
console.log(char2);
console.log(char3);

const getArray = () => {
  return ['ABC', 123];
};

const [letter, number] = getArray();
console.log(letter, number);

// * Task
// 1. First value array must be called name
// 2. Second value array must be called setName
const getArrayTask = (value) => {
  return [value, () => console.log('Hello World!')];
};

// const arr = getArrayTask('Phil');
// arr[1]();

const [name, setName] = getArrayTask('Phil');

console.log(name);
setName();
