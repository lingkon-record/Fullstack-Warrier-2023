 // main.js

// Sample array of persons with unknown ages
const persons = [
    { name: "Alice", age: Math.floor(Math.random() * 100) + 1 },
    { name: "Bob", age: Math.floor(Math.random() * 100) + 1 },
    { name: "Charlie", age: Math.floor(Math.random() * 100) + 1 },
    // Add more persons as needed
];

// Using map to create an array of ages
const ages = persons.map(person => person.age);
console.log("Ages of persons:", ages);

// Using find to get the oldest person
const oldestPerson = persons.find(person => person.age === Math.max(...ages));
console.log("Oldest person:", oldestPerson);
