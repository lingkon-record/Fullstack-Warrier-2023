 // Example 1: Checking if a variable is NaN
var num = 42;
var result = isNaN(num);
console.log(result);  // Output: false

// Example 2: Handling user input
var userInput = prompt("Enter a number:");
var parsedInput = parseFloat(userInput);

if (isNaN(parsedInput)) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  console.log("You entered a valid number: " + parsedInput);
}

// Example 3: Checking array elements for NaN
var numbers = [10, 20, 'Thirty', 40];

for (var i = 0; i < numbers.length; i++) {
  if (isNaN(numbers[i])) {
    console.log("Element at index " + i + " is not a number.");
  }
}
