let age = 25;
let isAdult = age >= 18 ? "Adult" : "Minor";

console.log("Age category: " + isAdult);

// Logical operator
let hasDriverLicense = true;
let hasCar = false;

if (hasDriverLicense && hasCar) {
  console.log("You can drive a car.");
} else if (hasDriverLicense || hasCar) {
  console.log("You have either a driver's license or a car.");
} else {
  console.log("You can't drive a car.");
}

// next
let num1 = 20;
let num2 = 15;
let min = (num1 < num2) ? num1 : num2;

console.log("Minimum number is: " + min);

// next
let value = 10;
value += 5; // Equivalent to value = value + 5

console.log("Updated value: " + value);




