 // Assuming you have a mixed list of ABC, DIGIT, and SYMBOL characters
const mixedList = ['ABC', '123456', 'XYZ', '!@#$%', '987654', 'abc123', '1234567', '456789'];

// Use the filter method to get only 6-digit numbers
const sixDigitNumbers = mixedList.filter(item => /^\d{6}$/.test(item));

console.log("6-digit Numbers:", sixDigitNumbers);
