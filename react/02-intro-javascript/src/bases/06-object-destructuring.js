// Object destructuring (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

const person = {
  name: 'Tony',
  age: 45,
  nick: 'Ironman',
  // status: 'Soldier',
};

console.log(person.name);
console.log(person.age);
console.log(person.nick);

const { age, name, nick: nickname } = person;

console.log(name);
console.log(age);
console.log(nickname);

const getPerson = (user) => {
  console.log(user);
};

getPerson(person);

// Destructuring in function params

const getPersonDestructuringInParams = ({ name, nick }) => {
  console.log(name, nick);
};

getPersonDestructuringInParams(person);

// With default values

const getPersonDefaultValue = ({ name, nick, status = 'Captain' }) => {
  console.log(name, nick, status);
};

getPersonDefaultValue(person);

// * Task

const getPersonTask = ({ age, nick }) => {
  return {
    _nick: nick,
    _age: age,
    latlng: {
      lat: 12.16484,
      lng: -31.48677,
    },
  };
};

// nested destructuring
const {
  _nick,
  _age,
  latlng: { lat, lng },
} = getPersonTask(person);

console.log(_nick, _age);
console.log(lat, lng);
