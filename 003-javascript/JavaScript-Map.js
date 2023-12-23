// Example: Working with Map methods

// Creating a new Map
let myMap = new Map();

// Setting values for keys
myMap.set("name", "John");
myMap.set("age", 25);
myMap.set("isStudent", true);

// Getting values for keys
console.log("Name:", myMap.get("name"));
console.log("Age:", myMap.get("age"));
console.log("Is Student?", myMap.get("isStudent"));

// Checking if a key exists
console.log("Has 'gender'?", myMap.has("gender")); // false

// Getting the number of elements in the Map
console.log("Number of elements:", myMap.size);

// Deleting a Map element by key
myMap.delete("isStudent");

// Iterating through key/value pairs using forEach
console.log("Iterating through key/value pairs:");
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// Getting an iterator with [key, value] pairs
console.log("Getting [key, value] pairs using entries:");
let iterator = myMap.entries();
for (let entry of iterator) {
  console.log(entry);
}
