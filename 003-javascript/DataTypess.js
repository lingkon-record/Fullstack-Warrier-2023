// Creating variables with different datatypes
let stringVariable = "Hello, JavaScript!"; // String
let numberVariable = 42; // Number
let bigintVariable = 9007199254740991n; // BigInt
let booleanVariable = true; // Boolean
let undefinedVariable; // Undefined
let nullVariable = null; // Null
let symbolVariable = Symbol("uniqueSymbol"); // Symbol

// Creating an object with various properties and methods
let objectVariable = {
  name: "John",
  age: 25,
  isStudent: false,
  greet: function() {
    console.log("Hello from the object!");
  },
  hobbies: ["Reading", "Coding", "Traveling"]
};

// Displaying the values and types of the variables
console.log("String Variable:", stringVariable, typeof stringVariable);
console.log("Number Variable:", numberVariable, typeof numberVariable);
console.log("BigInt Variable:", bigintVariable, typeof bigintVariable);
console.log("Boolean Variable:", booleanVariable, typeof booleanVariable);
console.log("Undefined Variable:", undefinedVariable, typeof undefinedVariable);
console.log("Null Variable:", nullVariable, typeof nullVariable);
console.log("Symbol Variable:", symbolVariable, typeof symbolVariable);

console.log("\nObject Variable:");
console.log("Name:", objectVariable.name);
console.log("Age:", objectVariable.age);
console.log("Is Student?", objectVariable.isStudent);
objectVariable.greet();
console.log("Hobbies:", objectVariable.hobbies);

// Modifying values within the object
objectVariable.age = 26;
objectVariable.hobbies.push("Cooking");

// Displaying the updated object
console.log("\nUpdated Object Variable:");
console.log("Name:", objectVariable.name);
console.log("Age:", objectVariable.age);
console.log("Hobbies:", objectVariable.hobbies);
