 let people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 18 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 17 },
  { name: 'Eve', age: 22 }
];

// Filter adults (age >= 18) and calculate average age
let totalAge = 0;
let adultCount = 0;

people.forEach(function(person) {
  if (person.age >= 18) {
    totalAge += person.age;
    adultCount++;
  }
});

let averageAge = adultCount > 0 ? totalAge / adultCount : 0;

console.log('Average age of adults: ' + averageAge);
