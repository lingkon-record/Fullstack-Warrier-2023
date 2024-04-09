// Create an array representing the number of parking spaces covered by the car
const parkingSpaces = [
    false, // Parking space 1
    true,  // Parking space 2
    true,  // Parking space 3
    false, // Parking space 4
    false, // Parking space 5
    true,  // Parking space 6
    false, // Parking space 7
    true,  // Parking space 8
    true,  // Parking space 9
    false  // Parking space 10
];

// Count the number of parking spaces covered by the car
const coveredSpaces = parkingSpaces.filter(space => space === true).length;

console.log("Number of parking spaces covered by the car:", coveredSpaces);
