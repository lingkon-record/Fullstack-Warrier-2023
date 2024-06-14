 // Define a class called Person
class Person {
  // Constructor to initialize the name and age properties
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to get the person's details
  getDetails() {
    return `${this.name} is ${this.age} years old.`;
  }

  // Method to set a new age for the person
  setAge(newAge) {
    this.age = newAge;
  }

  // Static method to compare the ages of two people
  static compareAges(person1, person2) {
    if (person1.age > person2.age) {
      return `${person1.name} is older than ${person2.name}.`;
    } else if (person1.age < person2.age) {
      return `${person1.name} is younger than ${person2.name}.`;
    } else {
      return `${person1.name} and ${person2.name} are the same age.`;
    }
  }
}

// Export the class so it can be used in other files
export default Person;
