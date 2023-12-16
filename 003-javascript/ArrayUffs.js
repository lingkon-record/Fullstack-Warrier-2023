 // Sample array
const originalArray = [1, 5, 9, 12, 3, 7];

// Digit for negotiation
const negotiationDigit = 5;

// Perform array operations with negotiation
const newArray = originalArray.map(item => item - negotiationDigit);
const filteredArray = originalArray.filter(item => item < negotiationDigit);

// Output results
console.log("Original Array:", originalArray);
console.log("Array after Negotiation (Subtracting", negotiationDigit + "):", newArray);
console.log("Filtered Array (Items Less Than", negotiationDigit + "):", filteredArray);
