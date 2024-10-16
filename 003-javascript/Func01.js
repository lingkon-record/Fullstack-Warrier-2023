const temperature = 25;
console.log(`The current temperature is ${temperature}°C.`);

const person = {
  firstName: "Alice",
  lastName: "Smith",
  fullName: function() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(person.fullName()); // Output: Alice Smith

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!


function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8


const multiply = (x, y) => x * y;
console.log(multiply(4, 7)); // Output: 28


function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
sayHello("John"); // Output: Hello, John!
