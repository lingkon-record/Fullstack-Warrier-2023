 function generateRandomArray(length, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
}

let firstArray = generateRandomArray(4, 10);
let lastArray = generateRandomArray(4, 10);

let results = [];

for (let i = 0; i < firstArray.length; i++) {
  let result = firstArray[i] + lastArray[i];
  results.push(result);

  console.log(`${firstArray[i]} + ${lastArray[i]} = ${result}`);
}

console.log("Results array:", results);
