 // Creating a Map with some initial values
let fruitMap = new Map([
  ["apple", 5],
  ["banana", 3],
  ["orange", 8],
]);

console.log("Original Map:");
fruitMap.forEach((quantity, fruit) => {
  console.log(`${fruit}: ${quantity}`);
});

// Deleting a key from the Map
let fruitToDelete = "banana";
fruitMap.delete(fruitToDelete);

console.log(`\nKey '${fruitToDelete}' deleted from the Map.`);

// Displaying the Map after deletion
console.log("\nMap after deletion:");
fruitMap.forEach((quantity, fruit) => {
  console.log(`${fruit}: ${quantity}`);
});
