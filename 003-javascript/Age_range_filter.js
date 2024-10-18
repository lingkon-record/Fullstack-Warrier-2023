// List of basketball players with their ages
const players = [
    { name: "LeBron James", age: 39 },
    { name: "Stephen Curry", age: 36 },
    { name: "Kevin Durant", age: 35 },
    { name: "Luka Dončić", age: 25 },
    { name: "Giannis Antetokounmpo", age: 29 },
    { name: "Nikola Jokić", age: 29 },
    { name: "Jayson Tatum", age: 26 },
    { name: "Zion Williamson", age: 24 },
    { name: "Ja Morant", age: 25 },
    { name: "James Harden", age: 34 },
    { name: "Damian Lillard", age: 34 },
    { name: "Anthony Edwards", age: 23 }
];

// Function to find players based on age range
function findPlayersByAgeRange(startAge, endAge) {
    return players.filter(player => player.age >= startAge && player.age <= endAge);
}

// Example input for start and end age range
const startAge = 25;
const endAge = 30;

const result = findPlayersByAgeRange(startAge, endAge);

console.log(`Players between ages ${startAge} and ${endAge}:`, result);
