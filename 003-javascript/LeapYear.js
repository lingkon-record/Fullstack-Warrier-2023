 // Function to check if a year is a leap year
function isLeapYear(year) {
  // Leap years are divisible by 4
  // However, years divisible by 100 are not leap years, unless they are also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
const testYear1 = 2020;
const testYear2 = 2100;

console.log(`${testYear1} is a leap year: ${isLeapYear(testYear1)}`);
console.log(`${testYear2} is a leap year: ${isLeapYear(testYear2)}`);
