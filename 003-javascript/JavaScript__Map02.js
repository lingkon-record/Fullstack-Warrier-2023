// Creating a Map by passing an Array to new Map()
const arrayMap = new Map([
  ["name", "Alice"],
  ["age", 30],
  ["isStudent", false],
]);

console.log("Map created by passing an Array:");
arrayMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});




// Creating a Map and using Map.set()
const setMap = new Map();

setMap.set("name", "Bob");
setMap.set("age", 25);
setMap.set("isStudent", true);

console.log("\nMap created using Map.set():");
setMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
