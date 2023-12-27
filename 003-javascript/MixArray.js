// Example array with mixed indices
const mixedArray = [];
mixedArray[0] = 'Zero';
mixedArray[1] = 'One';
mixedArray['two'] = 'Two';
mixedArray[3] = 'Three';

// Function to find an element by index (numeric or string)
function findElement(array, index) {
  return array[index];
}

// Example usage
const result1 = findElement(mixedArray, 0); // Numeric index
console.log(result1); // Output: 'Zero'

const result2 = findElement(mixedArray, 'two'); // String index
console.log(result2); // Output: 'Two'

const result3 = findElement(mixedArray, 3); // Numeric index
console.log(result3); // Output: 'Three'
