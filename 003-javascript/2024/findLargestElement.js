// Write a JavaScript program to find the largest element in a nested array. 


function findLargestElement(nestedArray) { 

  let largest = nestedArray[0][0]; 

  for (let arr of nestedArray) { 

    for (let num of arr) { 

      if (num > largest) { 

        largest = num; 

      } 

    } 

  } 

  return largest; 

} 

// 02 gpt

function findLargestElement(nestedArray) {
  let largestElement = Number.NEGATIVE_INFINITY;

  function traverseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      const currentElement = arr[i];

      if (Array.isArray(currentElement)) {
        traverseArray(currentElement); // Recursively traverse nested arrays
      } else {
        if (currentElement > largestElement) {
          largestElement = currentElement;
        }
      }
    }
  }

  traverseArray(nestedArray);
  return largestElement;
}

// Example usage:
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9, 10]]];
const result = findLargestElement(nestedArray);

console.log("The largest element is:", result);
