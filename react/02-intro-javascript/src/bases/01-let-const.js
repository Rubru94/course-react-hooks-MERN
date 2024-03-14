// let & const

const name = 'John'; // var should not be used
const surname = 'Doe';

let value = 5;
value = 10;

console.log(name, surname, value);

if (true) {
  // new scope
  const name = 'Jane';
  let value = 8;

  console.log(name, surname, value);
}

console.log(name, surname, value);
