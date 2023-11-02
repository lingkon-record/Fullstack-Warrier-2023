// Define a Cat class
class Cat {
  constructor(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.isSleeping = false;
  }

  // Method to make the cat sleep
  sleep() {
    if (!this.isSleeping) {
      this.isSleeping = true;
      console.log(`${this.name} is now sleeping.`);
    } else {
      console.log(`${this.name} is already sleeping.`);
    }
  }

  // Method to wake the cat up
  wakeUp() {
    if (this.isSleeping) {
      this.isSleeping = false;
      console.log(`${this.name} woke up.`);
    } else {
      console.log(`${this.name} is already awake.`);
    }
  }

  // Method to display cat's information
  getInfo() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Sleeping: ${this.isSleeping ? 'Yes' : 'No'}`;
  }
}

// Create cat instances
const cat1 = new Cat("Whiskers", "Siamese", 3);
const cat2 = new Cat("Fluffy", "Maine Coon", 5);

// Display cat information using console.log
console.log("Cat 1 Info:");
console.log(cat1.getInfo());

console.log("Cat 2 Info:");
console.log(cat2.getInfo());

// Interact with cats
cat1.sleep();
cat2.wakeUp();

// Display updated cat information
console.log("Updated Cat 1 Info:");
console.log(cat1.getInfo());

console.log("Updated Cat 2 Info:");
console.log(cat2.getInfo());
