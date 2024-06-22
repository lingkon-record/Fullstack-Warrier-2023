// Example array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

// Log the 5th name to the console
console.log(names[4]); // Arrays are zero-indexed, so the 5th element is at index 4


// Example object with name properties
const names = {
  name1: "Alice",
  name2: "Bob",
  name3: "Charlie",
  name4: "David",
  name5: "Eve",
  name6: "Frank"
};

// Log the 5th name to the console
console.log(names.name5); // Accessing the 5th property directly


// Example object with name properties
const names = {
  name1: "Alice",
  name2: "Bob",
  name3: "Charlie",
  name4: "David",
  name5: "Eve",
  name6: "Frank"
};

// Convert the object values to an array and log the 5th name to the console
const values = Object.values(names);
console.log(values[4]); // Arrays are zero-indexed, so the 5th element is at index 4
