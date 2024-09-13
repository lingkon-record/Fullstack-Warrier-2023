 // Function to remove duplicates from an array
function removeDuplicates(arr) {
  return Array.from(new Set(arr));
}

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);

console.log("Array with duplicates:", arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithoutDuplicates);
