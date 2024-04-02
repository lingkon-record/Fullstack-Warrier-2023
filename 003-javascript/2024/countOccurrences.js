function countOccurrences(str, char) {
    // Initialize a counter to store the number of occurrences
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // If the current character matches the specified character, increment the counter
        if (str[i] === char) {
            count++;
        }
    }

    // Return the total count of occurrences
    return count;
}

// Example usage:
const inputString = "hello world";
const characterToCount = "o";

const occurrences = countOccurrences(inputString, characterToCount);
console.log(`Number of occurrences of '${characterToCount}' in '${inputString}':`, occurrences);
