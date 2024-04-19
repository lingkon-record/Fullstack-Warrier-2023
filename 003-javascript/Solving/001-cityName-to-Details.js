
// Array of objects representing people
const people = [
  { name: "John", bikeBrand: "Honda", bikeTotal: 2, cityName: "New York" },
  { name: "Alice", bikeBrand: "Yamaha", bikeTotal: 1, cityName: "Los Angeles" },
  { name: "Bob", bikeBrand: "Kawasaki", bikeTotal: 3, cityName: "New York" },
  // Add more people as needed...
];

// Function to filter people based on city name and show only name, bike, and total
function filterAndDisplayPeopleByCity(city) {
  const filteredPeople = people.filter(person => person.cityName.toLowerCase() === city.toLowerCase());
  filteredPeople.forEach((person, index) => {
    console.log(`${index + 1}. Name: ${person.name}, Bike: ${person.bikeBrand}, Total: ${person.bikeTotal}`);
  });
}

// Example usage:
const cityName = "New York"; // Example city name
console.log("People living in", cityName + ":");
filterAndDisplayPeopleByCity(cityName);
