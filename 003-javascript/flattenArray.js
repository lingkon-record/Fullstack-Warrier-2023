// flattenArray.js

function flattenArray(nestedArray) {
  return nestedArray.reduce((flatArray, element) => {
    return flatArray.concat(Array.isArray(element) ? flattenArray(element) : element);
  }, []);
}



// Example usage:
const nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);
