
// Define an array of objects representing individuals
const people = [
  { name: 'Alice', age: 32, status: 'divorce', kids: 1 },
  { name: 'Bob', age: 45, status: 'single', kids: 0 },
  { name: 'Carol', age: 28, status: 'single', kids: 0 },
  { name: 'David', age: 39, status: 'divorce', kids: 2 },
  { name: 'Eve', age: 36, status: 'divorce', kids: 1 },
];

// Function to find individuals based on their status
const findPeopleByStatus = (peopleArray, status) => {
  return peopleArray.filter(person => person.status === status);
};

// Find people who are divorced
const divorcedPeople = findPeopleByStatus(people, 'divorce');
console.log('Divorced individuals:');
console.log(divorcedPeople);

// Find people who are single
const singlePeople = findPeopleByStatus(people, 'single');
console.log('Single individuals:');
console.log(singlePeople);
