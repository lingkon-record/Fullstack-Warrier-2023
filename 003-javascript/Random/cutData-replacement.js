 // Your original object
const originalObject = {
  name: 'John',
  age: 25,
  city: 'New York',
};

// Arrays to store cut values
const cutNames = [originalObject.name];
const cutAges = [originalObject.age];
const cutCities = [originalObject.city];

// Remove values from the original object
delete originalObject.name;
delete originalObject.age;
delete originalObject.city;

// Output the original object and the arrays with cut values
console.log('Original Object:', originalObject);
console.log('Cut Names:', cutNames);
console.log('Cut Ages:', cutAges);
console.log('Cut Cities:', cutCities);
