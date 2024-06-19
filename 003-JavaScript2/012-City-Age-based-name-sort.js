 // Sample array of people objects
const people = [
  { name: 'John', city: 'New York', age: 45 },
  { name: 'Alice', city: 'Los Angeles', age: 30 },
  { name: 'Bob', city: 'New York', age: 55 },
  { name: 'Charlie', city: 'Chicago', age: 40 },
  { name: 'David', city: 'Los Angeles', age: 35 }
];

// Function to sort people by age (oldest to youngest) and group by city
function sortAndGroupByCity(peopleArray) {
  // Sort by age in descending order
  const sortedByAge = peopleArray.sort((a, b) => b.age - a.age);
  
  // Group by city
  const groupedByCity = sortedByAge.reduce((result, person) => {
    if (!result[person.city]) {
      result[person.city] = [];
    }
    result[person.city].push(person);
    return result;
  }, {});

  return groupedByCity;
}

const sortedAndGrouped = sortAndGroupByCity(people);

console.log(sortedAndGrouped);
