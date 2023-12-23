// Example 1: Standard for loop
console.log("Example 1: Standard for loop");
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}

// Example 2: for/in loop with object properties
console.log("\nExample 2: for/in loop with object properties");
const person = {
  name: "John",
  age: 30,
  job: "Developer",
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Example 3: for/of loop with iterable object
console.log("\nExample 3: for/of loop with iterable object");
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

// Example 4: while loop with a condition
console.log("\nExample 4: while loop with a condition");
let counter = 0;
while (counter < 3) {
  console.log(`Count: ${counter}`);
  counter++;
}

// Example 5: do/while loop with a condition
console.log("\nExample 5: do/while loop with a condition");
let num = 1;
do {
  console.log(`Number: ${num}`);
  num++;
} while (num <= 3);
