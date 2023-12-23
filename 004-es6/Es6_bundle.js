// Arrow Function
const addArrow = (a, b) => a + b;

// Template Literals
const name = "Alice";
const greeting = `Hello, ${name}! Welcome to JavaScript.`;

// Array Destructuring
const numbers = [1, 2, 3];
const [first, second] = numbers;

// Object Destructuring
const person = { name: "Bob", age: 25 };
const { name: personName, age: personAge } = person;

// Default Parameters
const greet = (name = "Guest") => `Hello, ${name}!`;

// Spread Operator
// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

// Spread in Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Object Shorthand
const x = 10, y = 20;
const point = { x, y };

// Ternary Operator
const age = 25;
const status = age >= 18 ? "Adult" : "Minor";

// Logical Short-circuiting
const isLoggedIn = true;
const username = isLoggedIn && "Alice";

// Displaying Results
console.log("Arrow Function Result:", addArrow(3, 7));
console.log("Template Literals Greeting:", greeting);
console.log("Array Destructuring:", first, second);
console.log("Object Destructuring:", personName, personAge);
console.log("Default Parameters Greeting:", greet());
console.log("Spread in Arrays:", arr2);
console.log("Spread in Objects:", obj2);
console.log("Object Shorthand Point:", point);
console.log("Ternary Operator Status:", status);
console.log("Logical Short-circuiting Username:", username);
