// Dynamic Typing in JavaScript

// Example 1:
let dynamicVariable = 42; // variable starts as a number
console.log("Dynamic Variable:", dynamicVariable);

dynamicVariable = "I am a string now"; // variable changes to a string
console.log("Dynamic Variable:", dynamicVariable);

// Example 2:
function dynamicFunction(value) {
  console.log("Argument Type:", typeof value); // typeof operator is used to check the type
}

dynamicFunction(10); // Output: Argument Type: number
dynamicFunction("JavaScript"); // Output: Argument Type: string
dynamicFunction(true); // Output: Argument Type: boolean
