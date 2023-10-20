// 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["Reading", "Painting", "Traveling"]
};
console.log("Person Object:", person);

// Accessing Object Properties:
console.log("First Name:", person.firstName);
console.log("Hobbies:", person.hobbies[0]);

// Modifying Object Properties:
person.age = 31;
console.log("Updated Age:", person.age);

// Adding a New Property:
person.country = "USA";
console.log("Country:", person.country);

// Nested Objects:
const car = {
  make: "Toyota",
  model: "Camry",
  engine: {
    type: "V6",
    horsepower: 268
  }
};
console.log("Car Object:", car);
console.log("Engine Type:", car.engine.type);

