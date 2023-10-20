// gpt :Show me many ways for find odd even number in javaScript 

// ways 01

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

// Example usage:
console.log(isEven(4)); // true
console.log(isOdd(7)); // true

// Ways 2
function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


// Ternary
function isEvenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}
