// Function to get name based on index length
function getNameByIndexLength(index) {
    // Object containing names for different lengths of the index
    var names = {
        1: "John",
        2: "Alice",
        3: "Bob",
        4: "Emma",
        5: "David"  
    };

    // Get the length of the index
    var indexLength = index.toString().length;

    // Check if a name exists for the length of the index
    if (names[indexLength]) {
        return names[indexLength];
    } else {
        return "No name found for index length " + indexLength;
    }
}

console.log(getNameByIndexLength(123)); // Output: "Bob" (index length is 3)
console.log(getNameByIndexLength(12));  // Output: "Alice" (index length is 2)
console.log(getNameByIndexLength(4567));// Output: "No name found for index length 4"
