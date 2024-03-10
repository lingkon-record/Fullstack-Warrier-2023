// Core JavaScript Concepts

// 1. Variables and Data Types
let firstName = "John";
const lastName = "Doe";
var age = 25;
let isStudent = false;
const hobbies = ["Reading", "Coding", "Gaming"];

// 2. Functions
function greetPerson(personName, personAge) {
  return `Hello, ${personName}! You are ${personAge} years old.`;
}

function addNumbers(num1, num2) {
  return num1 + num2;
}

// 3. Conditional Statements
function checkAge(personAge) {
  if (personAge >= 18) {
    return "You are an adult.";
  } else {
    return "You are a minor.";
  }
}

// 4. Loops
function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

// 5. Objects and Arrays
let person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 30,
  hobbies: ["Painting", "Traveling"],
};

let carBrands = ["Toyota", "Honda", "Ford", "Chevrolet"];

// 6. DOM Manipulation (for browser environment)
document.getElementById("demo").innerHTML = "Hello, World!";

// 7. Event Handling (for browser environment)
document.getElementById("myButton").addEventListener("click", function () {
  alert("Button clicked!");
});

// 8. Asynchronous JavaScript (Promises)
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating async data fetching
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      resolve(data);
    }, 2000);
  });
}

// Usage of the Promise
fetchData().then((result) => {
  console.log(result.message);
});

// 9. Error Handling (try-catch)
function divideNumbers(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return num1 / num2;
  } catch (error) {
    console.error(error.message);
  }
}

// 10. Modules (ES6 module syntax)
// Importing a module
import { square } from "./mathFunctions.js";

// Using the imported module function
console.log(square(5));


