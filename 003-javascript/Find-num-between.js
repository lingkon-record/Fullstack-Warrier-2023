// Assuming you have a list of numbers
const numberList = [15, 25, 30, 18, 22, 40, 28, 21, 35, 19, 26, 29, 32, 27];

// Use the filter method to get numbers between 20 and 30
const filteredNumbers = numberList.filter(number => number >= 20 && number <= 30);

// Log the result to the console
console.log("Numbers between 20 and 30:", filteredNumbers);
