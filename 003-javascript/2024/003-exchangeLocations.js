// Example city data represented as objects
const dhaka = { name: 'Dhaka', location: 'Urban' };
const chittagong = { name: 'Chittagong', location: 'Coastal' };

// Function to exchange locations between two cities
const exchangeLocations = (city1, city2) => {
  const tempLocation = city1.location;
  city1.location = city2.location;
  city2.location = tempLocation;
  console.log(`${city1.name} is now located in ${city1.location}`);
  console.log(`${city2.name} is now located in ${city2.location}`);
};

// Example usage
exchangeLocations(dhaka, chittagong);
