// Regular function
function calculateArea(length, width) {
  return length * width;
}

// Arrow function
const calculateAreaArrow = (length, width) => length * width;

// Example usage
const rectangleArea = calculateArea(5, 8);
const rectangleAreaArrow = calculateAreaArrow(5, 8);

console.log("Rectangle Area (Regular Function):", rectangleArea);
console.log("Rectangle Area (Arrow Function):", rectangleAreaArrow);
