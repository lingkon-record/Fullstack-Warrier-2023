const isTrue = true;
console.log(isTrue);

console.log(0 == "0"); // true (coercion)
console.log(0 === "0"); // false (strict equality)


let name = "John";
console.log(`Hello, ${name}!`);


console.warn("This is a warning message.");

console.error("Oops! This is an error.");

console.assert(2 + 2 === 5, "Math is broken!"); // Throws an error if the assertion is false.

console.clear(); // Clears the console.



console.time("myTimer");
// Code to measure execution time
console.timeEnd("myTimer"); // Outputs the time elapsed.


// Grouping

console.group("Group A");
console.log("Item 1");
console.log("Item 2");
console.groupEnd();

console.group("Group B");
console.log("Item 3");
console.log("Item 4");
console.groupEnd();



// Table 

console.table([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
]);

