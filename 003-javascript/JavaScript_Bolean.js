// Example 1: Basic Boolean usage
let isTrue = true;
let isFalse = false;

// Example 2: Boolean comparison
let number1 = 5;
let number2 = 10;
let isGreaterThan = number1 > number2; // false

// Example 3: Boolean operators
let hasPermission = true;
let isAdmin = false;
let canAccessAdminPanel = hasPermission && isAdmin; // false

// Example 4: Using Boolean functions
function isEven(number) {
  return number % 2 === 0;
}

let result1 = isEven(4); // true
let result2 = isEven(7); // false

// Example 5: Boolean in conditional statements
let temperature = 25;
if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature <= 30 && temperature > 20) {
  console.log("It's a pleasant day.");
} else {
  console.log("It's a cold day.");
}

// Example 6: Ternary operator
let age = 18;
let canVote = age >= 18 ? "Can vote" : "Cannot vote";

console.log(canVote);

// Example 7: Boolean conversion
let value1 = Boolean(""); // false
let value2 = Boolean(0); // false
let value3 = Boolean("Hello"); // true
let value4 = Boolean(42); // true

// Example 8: Using Boolean with arrays
let numbers = [1, 2, 3, 4, 5];
let hasEvenNumber = numbers.some(isEven); // true

console.log(hasEvenNumber);
