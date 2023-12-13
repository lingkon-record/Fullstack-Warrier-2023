// Function to generate a unique code
function generateUniqueCode() {
  return Math.random().toString(36).substring(2, 8);
}

// Array of human data with unique codes
const iranianHumanData = [
  { name: "John", age: 25, code: generateUniqueCode() },
  { name: "Mary", age: 30, code: generateUniqueCode() },
  // Add more data as needed
];

console.log(iranianHumanData);
