 // Sample arrays
const indianMales = ["John", "Doe", "Smith"];
const ages = [25, 30, 22];
const cities = ["Mumbai", "Delhi", "Bangalore"];

// Function to merge arrays
function mergeArrays(names, ages, cities) {
  return names.map((name, index) => ({
    name,
    age: ages[index],
    city: cities[index],
  }));
}

// Example usage
const mergedArray = mergeArrays(indianMales, ages, cities);

console.log("Merged Array:", mergedArray);
