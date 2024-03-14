// template strings

const name = 'John';
const surname = 'Doe';

// const fullName = name + ' ' + surname;
const fullName = `${name} ${surname}`;
const fullNameLineBreak = `
${name} 
${surname}
${1 + 2}`;
const getGreetingArrow = () => '[=>] Hello World !! [=>]';
const functions = `${getGreeting()} - ${getGreetingArrow()}`;

function getGreeting() {
  return 'Hello World !!';
}

function getGreetingTo(name) {
  return `Hello ${name} !!`;
}

console.log(fullName);
console.log(fullNameLineBreak);
console.log(functions);
console.log(`Greetings: ${getGreetingTo(fullName)}`);
