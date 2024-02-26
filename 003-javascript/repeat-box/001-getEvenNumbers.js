 // Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers


function getEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

// Example usage:
const inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(inputNumbers);

console.log("Input Numbers:", inputNumbers);
console.log("Even Numbers:", evenNumbers);
