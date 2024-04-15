const hello = "Hello, World!";
const helloLength = hello.length;

// Attempting to change the first character, but it has no effect because strings are immutable
hello[0] = "L";

// Accessing the first character, which remains unchanged
const firstCharacter = hello[0]; // This returns "H"

console.log(hello); // Output: "Hello, World!"
console.log(helloLength); // Output: 13
console.log(firstCharacter); // Output: "H"
