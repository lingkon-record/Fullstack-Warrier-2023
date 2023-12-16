// Main.ts

// Basic Variable Declarations
let message: string = "Hello, TypeScript!";
console.log(message);

// Type Inference
let age = 25; // TypeScript infers the type as number
console.log("Age:", age);

// Functions with Explicit Return Type
function add(x: number, y: number): number {
  return x + y;
}
console.log("Sum:", add(3, 7));

// Interfaces
interface Person {
  name: string;
  age: number;
}

// Object with Interface
let person: Person = {
  name: "John Doe",
  age: 30,
};
console.log("Person:", person);

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);

// Union Types
let mixed: string | number = "Text or Number";
console.log("Mixed:", mixed);

// Classes
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

let cat = new Animal("Cat");
cat.makeSound();

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let result = identity<string>("Generics");
console.log("Identity:", result);

// Enums
enum Color {
  Red,
  Green,
  Blue,
}

let chosenColor: Color = Color.Green;
console.log("Chosen Color:", chosenColor);
