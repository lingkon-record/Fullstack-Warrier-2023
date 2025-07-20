const fruits = ["apple", "banana", "cherry", "date", "apple"];

// ✅ GREEN - Basic Modifying & Searching Methods
console.log("=== GREEN METHODS ===");

// push()
const pushExample = [...fruits];
pushExample.push("elderberry");
console.log("push():", pushExample);

// pop()
const popExample = [...fruits];
popExample.pop();
console.log("pop():", popExample);

// shift()
const shiftExample = [...fruits];
shiftExample.shift();
console.log("shift():", shiftExample);

// unshift()
const unshiftExample = [...fruits];
unshiftExample.unshift("fig");
console.log("unshift():", unshiftExample);

// find()
const findExample = fruits.find(fruit => fruit.startsWith("b"));
console.log("find():", findExample);

// some()
const someExample = fruits.some(fruit => fruit.length > 5);
console.log("some():", someExample);

// every()
const everyExample = fruits.every(fruit => typeof fruit === "string");
console.log("every():", everyExample);


// ✅ RED - Functional & Transformative Methods
console.log("\n=== RED METHODS ===");

// sort()
const sortExample = [...fruits].sort();
console.log("sort():", sortExample);

// includes()
const includesExample = fruits.includes("banana");
console.log("includes():", includesExample);

// slice()
const sliceExample = fruits.slice(1, 3);
console.log("slice():", sliceExample);

// map()
const mapExample = fruits.map(fruit => fruit.toUpperCase());
console.log("map():", mapExample);

// filter()
const filterExample = fruits.filter(fruit => fruit.startsWith("a"));
console.log("filter():", filterExample);

// reduce()
const reduceExample = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log("reduce():", reduceExample);

// forEach()
console.log("forEach():");
fruits.forEach((fruit, index) => console.log(`  ${index}: ${fruit}`));


// ✅ BLUE - Indexing, Joining, and Type Conversion
console.log("\n=== BLUE METHODS ===");

// indexOf()
const indexOfExample = fruits.indexOf("apple");
console.log("indexOf():", indexOfExample);

// lastIndexOf()
const lastIndexOfExample = fruits.lastIndexOf("apple");
console.log("lastIndexOf():", lastIndexOfExample);

// reverse()
const reverseExample = [...fruits].reverse();
console.log("reverse():", reverseExample);

// concat()
const moreFruits = ["grape", "honeydew"];
const concatExample = fruits.concat(moreFruits);
console.log("concat():", concatExample);

// join()
const joinExample = fruits.join(" | ");
console.log("join():", joinExample);

// toString()
const toStringExample = fruits.toString();
console.log("toString():", toStringExample);