// Regular function
function sumOfSquaresOfEvens(numbers) {
  return numbers
    .filter(function (num) {
      return num % 2 === 0;
    })
    .map(function (evenNum) {
      return evenNum * evenNum;
    })
    .reduce(function (sum, square) {
      return sum + square;
    }, 0);
}

// Arrow function
const sumOfSquaresOfEvensArrow = (numbers) =>
  numbers
    .filter((num) => num % 2 === 0)
    .map((evenNum) => evenNum * evenNum)
    .reduce((sum, square) => sum + square, 0);

// Example usage
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultRegularFunction = sumOfSquaresOfEvens(numberArray);
const resultArrowFunction = sumOfSquaresOfEvensArrow(numberArray);

console.log("Sum of Squares of Evens (Regular Function):", resultRegularFunction);
console.log("Sum of Squares of Evens (Arrow Function):", resultArrowFunction);
