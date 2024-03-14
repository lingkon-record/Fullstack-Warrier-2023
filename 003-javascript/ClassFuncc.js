// Define animal types in here
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  getInfo() {
    return `Name: ${this.name}, Type: ${this.type}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }
  getInfo() {
    return `Name: ${this.name}, Type: ${this.type}, Breed: ${this.breed}`;
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super(name, "Cat");
    this.color = color;
  }
  getInfo() {
    return `Name: ${this.name}, Type: ${this.type}, Color: ${this.color}`;
  }
}

// Create an adoption system 0 below
class AdoptionSystem {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log(`Added ${animal.type} named ${animal.name} to the adoption system.`);
  }

  listAnimals() {
    console.log("Available Animals for Adoption:");
    this.animals.forEach((animal, index) => {
      console.log(`${index + 1}. ${animal.getInfo()}`);
    });
  }

  adoptAnimal(index) {
    if (index >= 0 && index < this.animals.length) {
      const adoptedAnimal = this.animals.splice(index, 1)[0];
      console.log(`Adopted ${adoptedAnimal.type} named ${adoptedAnimal.name}!`);
    } else {
      console.log("Invalid selection. Please choose a valid animal for adoption.");
    }
  }
}

// Create animal instances
const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Luna", "Husky");
const cat1 = new Cat("Whiskers", "Gray");
const cat2 = new Cat("Oliver", "Black");

// Create an adoption system
const animalAdoption = new AdoptionSystem();

// Add animals to the adoption system
animalAdoption.addAnimal(dog1);
animalAdoption.addAnimal(dog2);
animalAdoption.addAnimal(cat1);
animalAdoption.addAnimal(cat2);

// List available animals
animalAdoption.listAnimals();

// Simulate adoption
animalAdoption.adoptAnimal(1); // Adopt Luna

// List available animals after adoption
animalAdoption.listAnimals();
  
