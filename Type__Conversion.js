// JavaScript Type Conversion

// Converting Strings to Numbers
let strNumber = "42";
let convertedNumber = Number(strNumber);
console.log("Converted Number:", convertedNumber); // Output: 42

// Converting Numbers to Strings
let numToString = 25;
let convertedString = String(numToString);
console.log("Converted String:", convertedString); // Output: "25"

// Converting Dates to Numbers
let currentDate = new Date();
let dateToNumber = Number(currentDate);
console.log("Date to Number:", dateToNumber); // Output: timestamp in milliseconds

// Converting Numbers to Dates
let timestamp = 1609459200000; // 01 January 2023
let numberToDate = new Date(timestamp);
console.log("Number to Date:", numberToDate); // Output: Sun Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)

// Converting Booleans to Numbers
let boolToNumberTrue = Number(true);
let boolToNumberFalse = Number(false);
console.log("Boolean to Number (True):", boolToNumberTrue); // Output: 1
console.log("Boolean to Number (False):", boolToNumberFalse); // Output: 0

// Converting Numbers to Booleans
let numberToBoolZero = Boolean(0);
let numberToBoolNonZero = Boolean(42);
console.log("Number to Boolean (Zero):", numberToBoolZero); // Output: false
console.log("Number to Boolean (Non-Zero):", numberToBoolNonZero); // Output: true
