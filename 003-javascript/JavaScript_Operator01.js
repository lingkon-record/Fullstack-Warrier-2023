// Example 1: Comparison Operators
let x = 5;
let y = "5";
let isEqual = x == y; // true (loose equality)
let isStrictEqual = x === y; // false (strict equality)

// Example 2: More Comparison Operators
let a = 10;
let b = 15;
let isGreater = a > b; // false
let isLessOrEqual = a <= b; // true

// Example 3: Logical AND Operator
let isTrue1 = true;
let isTrue2 = true;
let resultAND = isTrue1 && isTrue2; // true

// Example 4: Logical OR Operator
let isTrue3 = true;
let isFalse = false;
let resultOR = isTrue3 || isFalse; // true

// Example 5: Logical NOT Operator
let isTruthy = true;
let resultNOT = !isTruthy; // false

// Example 6: Combining Logical Operators
let isUserLoggedIn = true;
let isAdminUser = false;
let hasPermission = true;
let canAccessResource = isUserLoggedIn && (isAdminUser || hasPermission);

// Example 7: Ternary Operator with Logical AND
let age = 21;
let canDrinkAlcohol = age >= 21 ? "Can drink" : "Cannot drink";

// Example 8: Short-Circuit Evaluation
let value1 = true && "Hello"; // "Hello"
let value2 = false || "World"; // "World"

// Example 9: Comparison with Strings
let string1 = "apple";
let string2 = "banana";
let isStringEqual = string1 === string2; // false
let isLexicographicallyGreater = string1 > string2; // false

// Example 10: Using Comparison in a Conditional Statement
let num = -5;
if (num > 0) {
  console.log("Number is positive.");
} else if (num < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}
