// JavaScript,,, find a number,, its have or not

const numbers = [1, 2, 3, 4, 5];
const numberToFind = 3;

if (numbers.includes(numberToFind)) {
  console.log(`The number ${numberToFind} exists in the array.`);
} else {
  console.log(`The number ${numberToFind} does not exist in the array.`);
}



// Next 1
const numbers = [1, 2, 3, 4, 5];
const numberToFind = 3;

if (numbers.indexOf(numberToFind) !== -1) {
  console.log(`The number ${numberToFind} exists in the array.`);
} else {
  console.log(`The number ${numberToFind} does not exist in the array.`);
}


// Next 2

const numbers = [5, 15, 25, 35, 45];
const numberToFind = 15;

const foundNumber = numbers.find(number => number === numberToFind);

if (foundNumber !== undefined) {
  console.log(`The number ${numberToFind} exists in the array.`);
} else {
  console.log(`The number ${numberToFind} does not exist in the array.`);
}
