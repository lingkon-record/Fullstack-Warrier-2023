 // Sample data
const girls = [
  { name: "Alice", age: 25, status: "single" },
  { name: "Betty", age: 22, status: "divorced" },
  { name: "Clara", age: 20, status: "divorced" },
  { name: "Diana", age: 21, status: "married" },
  { name: "Eva", age: 23, status: "divorced" },
  { name: "Fiona", age: 19, status: "divorced" }
];

// Function to filter and sort girls by age and status
function filterAndSortGirlsByAgeAndStatus(girls, minAge, maxAge, status) {
  return girls
    .filter(girl => girl.age >= minAge && girl.age <= maxAge && girl.status === status)
    .sort((a, b) => a.age - b.age);
}

// Define the age range and status
const minAge = 20;
const maxAge = 23;
const status = "divorced";

// Get the sorted array
const sortedGirls = filterAndSortGirlsByAgeAndStatus(girls, minAge, maxAge, status);

// Print the result
console.log(sortedGirls);
