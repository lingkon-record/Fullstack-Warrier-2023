function reciprocalOfSmallNumber(x) {
  // As x approaches 0 from the negative side
  return 1 / x;
}

// Example using a small negative number
var smallNegativeNumber = -0.000001;
var result = reciprocalOfSmallNumber(smallNegativeNumber);

console.log(result);  // Output: -1000000
