// gpt

const inputString = "aB3X";
const pattern1 = /[a-c]/; // Matches any character a, b, or c
console.log(pattern1.test(inputString)); // Output: true

const pattern2 = /[a-z]/; // Matches any lowercase letter from a to z
console.log(pattern2.test(inputString)); // Output: true

const pattern3 = /[A-Z]/; // Matches any uppercase letter from A to Z
console.log(pattern3.test(inputString)); // Output: true

const pattern4 = /[0-3]/; // Matches any digit 0, 1, 2, or 3
console.log(pattern4.test(inputString)); // Output: true

const pattern5 = /[0-9]/; // Matches any digit from 0 to 9
console.log(pattern5.test(inputString)); // Output: true

const pattern6 = /[A-Za-z0-9]/; // Matches any alphanumeric character
console.log(pattern6.test(inputString)); // Output: true
