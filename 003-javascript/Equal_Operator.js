// Examples of strict equality (===) operator
let num1 = 5;
let num2 = "5";

// Number and string with the same value but different types
console.log(num1 === num2); // false

let bool1 = true;
let bool2 = 1;

// Boolean and number with the same value but different types
console.log(bool1 === bool2); // false

let str1 = "hello";
let str2 = "hello";

// Two strings with the same value and type
console.log(str1 === str2); // true

let x = undefined;
let y = null;

// Undefined and null with the same value but different types
console.log(x === y); // false

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

// Two arrays with the same values but different references
console.log(arr1 === arr2); // false
