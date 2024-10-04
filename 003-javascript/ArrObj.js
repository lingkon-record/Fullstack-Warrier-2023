const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];

console.log(people[0].name); // Access the name property of the first object
console.log(people[2].age);  // Access the age property of the third object


// look 

const student = {
  name: "Emma",
  grades: [90, 85, 78, 92],
  subjects: ["Math", "Science", "History", "English"]
};

console.log(student.name);      // Access the name property
console.log(student.grades[2]);  // Access the third grade
console.log(student.subjects[1]); // Access the second subject



// complex big

const library = [
  {
    bookTitle: "The Great Gatsby",
    author: {
      firstName: "F. Scott",
      lastName: "Fitzgerald"
    },
    genres: ["Fiction", "Classic"],
    yearPublished: 1925
  },
  {
    bookTitle: "To Kill a Mockingbird",
    author: {
      firstName: "Harper",
      lastName: "Lee"
    },
    genres: ["Fiction", "Drama"],
    yearPublished: 1960
  },
  {
    bookTitle: "The Hobbit",
    author: {
      firstName: "J.R.R.",
      lastName: "Tolkien"
    },
    genres: ["Fantasy"],
    yearPublished: 1937
  }
];

// Accessing data from the complex structure
console.log(library[0].bookTitle); // Access the title of the first book
console.log(library[1].author.firstName); // Access the first name of the author of the second book
console.log(library[2].genres[0]); // Access the first genre of the third book
