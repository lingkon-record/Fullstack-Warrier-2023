 function generateRandomArray(length, max) {
  return Array.from({ length }, () => Math.floor(Math.random() * max));
}

let names = ["Alice", "Bob", "Charlie", "David"];
let scores = generateRandomArray(names.length, 100);

let results = [];

for (let i = 0; i < names.length; i++) {
  let result = scores[i] + generateRandomArray(1, 10)[0];
  results.push(result);

  console.log(`${names[i]}'s score (${scores[i]}) + bonus = ${result}`);
}

console.log("Results array:", results);
