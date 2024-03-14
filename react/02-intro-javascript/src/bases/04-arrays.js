// arrays

// const array = new Array(10); // constructor can be used if you know number of positions - not restrictive
const array = [1, 2, 3, 4];

// It should be noted that the push command modifies the array (mutation), so when we want to insert we will use spread
// array.push(1);
// array.push(2);

// Mutative

// const array2 = array;
// array.push(5);

// Non Mutative

//const array2 = array.concat(5);
const array2 = [...array, 5];

const array3 = array2.map((a) => a); // copy - map() always create a new array

const array4 = array2.map((a) => a * 2);

console.log(array2);
console.log(array);
console.log(array3);
console.log(array4);
