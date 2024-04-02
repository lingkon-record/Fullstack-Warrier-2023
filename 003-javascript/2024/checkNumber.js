function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Example usage:
const num1 = 5;
const num2 = -8;
const num3 = 0;

console.log(num1, "is:", checkNumber(num1)); // Output: 5 is: Positive
console.log(num2, "is:", checkNumber(num2)); // Output: -8 is: Negative
console.log(num3, "is:", checkNumber(num3)); // Output: 0 is: Zero
