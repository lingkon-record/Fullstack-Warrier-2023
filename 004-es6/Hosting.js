// JavaScript Hosting.js

// Example 1: Variable Hoisting
console.log(message); // Output: undefined
var message = "Hello, hoisting!";
console.log(message); // Output: Hello, hoisting!

// Example 2: Function Hoisting
sayHello(); // Output: Hello from hoisted function!

function sayHello() {
  console.log("Hello from hoisted function!");
}

// Example 3: Function Expression and Hoisting
sayGoodbye(); // TypeError: sayGoodbye is not a function
var sayGoodbye = function () {
  console.log("Goodbye from hoisted function expression!");
};
