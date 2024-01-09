const processUserData = (user = {}) => {
  const {
    id = 1,
    username = "guest",
    details: {
      name: { firstName = "John", lastName = "Doe" } = {},
      address: { city = "Unknown", country = "Uncharted" } = {}
    } = {}
  } = user;

  console.log(`User ID: ${id}`);
  console.log(`Username: ${username}`);
  console.log(`Name: ${firstName} ${lastName}`);
  console.log(`Address: ${city}, ${country}`);
};

// Example usage with default values and falsy checks
const userWithoutDetails = {
  id: 2,
  username: "alice"
};

processUserData(userWithoutDetails);
