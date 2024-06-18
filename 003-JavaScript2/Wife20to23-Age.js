 // Sample data
const girls = [
  { name: "Alice", age: 25 },
  { name: "Betty", age: 22 },
  { name: "Clara", age: 0 },
  { name: "Diana", age: 21 },
  { name: "Eva", age: 2 },
  { name: "Fiona", age: 19 }
];

// Function to filter and sort girls by age
function filterAndSortGirlsByAge(girls, minAge, maxAge) {
  return girls
    .filter(girl => girl.age >= minAge && girl.age <= maxAge)
    .sort((a, b) => a.age - b.age);
}

// Define the age range
const minAge = 20;
const maxAge = 23;

// Get the sorted array
const sortedGirls = filterAndSortGirlsByAge(girls, minAge, maxAge);

// Print the result
console.log(sortedGirls);
