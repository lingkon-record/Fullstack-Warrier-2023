// Example: Using for/in with a simple object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  color: "Blue",
};

console.log("Example: Using for/in loop with a simple object");

for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
