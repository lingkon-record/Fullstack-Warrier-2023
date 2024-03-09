// Implicit Type Coercion Examples

// 1. String and Number Concatenation
var result1 = "5" + 3; // Result: "53"
console.log(result1);

// 2. Arithmetic Operations
var result2 = "5" - 3; // Result: 2
console.log(result2);

// 3. Comparison Operators
var result3 = "10" > 5; // Result: true
console.log(result3);

// 4. Truthy and Falsy Values
if ("hello") {
    // This block will be executed because the string "hello" is truthy
    console.log("Truthy value");
}

// Explicit Type Conversion Example
var numString = "10";
var num = Number(numString); // Explicitly converting the string to a number

console.log(num + 5); // Result: 15
