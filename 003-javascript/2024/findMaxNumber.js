function findMaxNumber(arr) {
  if (arr.length === 0) {
      return "Array is empty";
        }
  let maxNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxNumber) {
            maxNumber = arr[i];
                }
                  }
  return maxNumber;
  }
// Example usage:
const numbers = [5, 8, 2, 10, 3];
const max = findMaxNumber(numbers);
console.log("Maximum number:", max);
