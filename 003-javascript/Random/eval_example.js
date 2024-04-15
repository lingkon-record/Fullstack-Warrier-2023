const firstString = "2 + 2"; // Creates a string literal value
const secondString = new String("2 + 2"); // Creates a String object

const result1 = eval(firstString); // Returns the number 4
const result2 = eval(secondString); // Returns a String object containing "2 + 2"

console.log(result1); // Output: 4
console.log(result2); // Output: "2 + 2"
