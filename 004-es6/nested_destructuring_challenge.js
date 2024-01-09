 const user = {
  id: 1,
  username: "john_doe",
  details: {
    name: {
      firstName: "John",
      lastName: "Doe"
    },
    address: {
      city: "Exampleville",
      country: "Wonderland"
    }
  }
};

// Destructuring with deep nesting
const {
  id,
  username,
  details: {
    name: { firstName, lastName },
    address: { city, country }
  }
} = user;

console.log(id, username, firstName, lastName, city, country);
