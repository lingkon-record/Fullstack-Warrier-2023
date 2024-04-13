// Define an Animal object
function Animal(name, type) {
  this.name = name;
  this.type = type;
}


const lion = new Animal("Simba", "Lion");
const elephant = new Animal("Dumbo", "Elephant");

// Display animal information using the console
console.log("Animal 1: " + lion.name + " is a " + lion.type);
console.log("Animal 2: " + elephant.name + " is an " + elephant.type);

// next
