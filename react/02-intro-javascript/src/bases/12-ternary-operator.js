// Conditional (ternary) operator

const isActive = true;

/* let message = '';

if (isActive) {
  message = 'active';
} else {
  message = 'not active';
} */

// ternary

const message = isActive ? 'active' : 'not active';

const message2 = isActive && 'active'; // conditional only taking into account the case in which it is met

// nullish coalescing (??)

const message3 = isActive ?? 'not active'; // returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

console.log(message);
console.log(message2); // Expected output: if isActive true return 'active', if isActive false return false
console.log(message3); // Expected output: if isActive not null return isActive, if isActive null return 'not active'

// Nullish coalescing assignment (??=)

const a = { duration: 50 };

a.duration ??= 10; // also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).
console.log(a.duration); // Expected output: 50

a.speed ??= 25;
console.log(a.speed); // Expected output: 25
