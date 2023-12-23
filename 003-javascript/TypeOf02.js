// String
let greeting = "Hello, JavaScript!";
console.log("Type of greeting:", typeof greeting); // Output: string

// Number
let age = 25;
console.log("Type of age:", typeof age); // Output: number

// Boolean
let isStudent = true;
console.log("Type of isStudent:", typeof isStudent); // Output: boolean

// Object
let person = { name: "Alice", age: 30 };
console.log("Type of person:", typeof person); // Output: object

// Function
function addNumbers(a, b) {
  return a + b;
}
console.log("Type of addNumbers:", typeof addNumbers); // Output: function

// Undefined
let undefinedValue;
console.log("Type of undefinedValue:", typeof undefinedValue); // Output: undefined

// Null
let nullValue = null;
console.log("Type of nullValue:", typeof nullValue); // Output: object

// Arrays are objects
let colors = ["red", "green", "blue"];
console.log("Type of colors:", typeof colors); // Output: object

// Checking null with special case
console.log("Is null a number?", typeof nullValue === 'number'); // Output: false
