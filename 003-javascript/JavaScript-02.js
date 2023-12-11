 // Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original and reversed strings
  return cleanStr === cleanStr.split('').reverse().join('');
}

// Example usage
const testString1 = "A man, a plan, a canal, Panama!";
const testString2 = "Hello, World!";

console.log(`"${testString1}" is a palindrome: ${isPalindrome(testString1)}`);
console.log(`"${testString2}" is a palindrome: ${isPalindrome(testString2)}`);
