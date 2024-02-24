// its already have in js problem box

function filterNegativeNumbers(arr) {
    return arr.filter(number => number >= 0);
}

// Example usage:
const inputArray = [1, -2, 3, -4, 5];
const filteredArray = filterNegativeNumbers(inputArray);

console.log("Original array:", inputArray);
console.log("Filtered array (excluding negative numbers):", filteredArray);
