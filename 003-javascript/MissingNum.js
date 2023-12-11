 // Function to find the missing number in an array of consecutive numbers
function findMissingNumber(arr) {
  const n = arr.length + 1; // Including the missing number
  const expectedSum = (n * (n + 1)) / 2; // Sum of consecutive numbers formula
  const actualSum = arr.reduce((sum, num) => sum + num, 0);

  return expectedSum - actualSum;
}

// Example usage
const consecutiveArray = [1, 2, 3, 5, 6, 7, 8];
const missingNumber = findMissingNumber(consecutiveArray);

console.log("The missing number is:", missingNumber);
