const cricketPlayers = [
  { name: 'Virat Kohli', country: 'India', runRate: 53.5 },
  { name: 'Steve Smith', country: 'Australia', runRate: 51.2 },
  { name: 'Joe Root', country: 'England', runRate: 56.4 },
  { name: 'Kagiso Rabada', country: 'South Africa', runRate: 48.9 },
  { name: 'Kane Williamson', country: 'New Zealand', runRate: 54.2 },
  { name: 'Babar Azam', country: 'Pakistan', runRate: 49.8 },
  { name: 'Rohit', country: 'India', runRate: 52.7 },
  { name: 'Pat Cummins', country: 'Australia', runRate: 49.3 },
  { name: 'Ben Stokes', country: 'England', runRate: 55.1 },
  { name: 'Quinton de Kock', country: 'South Africa', runRate: 47.5 },
  { name: 'Kane Williamson', country: 'New Zealand', runRate: 53.9 },
  { name: 'Babar Azam', country: 'Pakistan', runRate: 51.8 },
  { name: 'Rohit Sharma', country: 'India', runRate: 52.1 },
  { name: 'Pat Cummins', country: 'Australia', runRate: 50.3 },
  { name: 'Ben Stokes', country: 'England', runRate: 54.2 },
  // add more
];


// Sort the players by run rate in descending order
cricketPlayers.sort((a, b) => b.runRate - a.runRate);

// Get the top 5 players
const top5Players = cricketPlayers.slice(0, 5);

// Display the 5 best cricket players based on run rate
console.log('5 Best Cricket Players based on Run Rate:');
top5Players.forEach((player, index) => {
  console.log(`${index + 1}. Name: ${player.name}, Country: ${player.country}, Run Rate: ${player.runRate}`);
});


// Code2 , list ... Same variable old 

// Sort the players by run rate in descending order
cricketPlayers.sort((a, b) => b.runRate - a.runRate);

// Get the top 5 players
const top5Players = cricketPlayers.slice(0, 5);

// Display the 5 best cricket players based on run rate
console.log('5 Best Cricket Players based on Run Rate:');
top5Players.forEach((player, index) => {
  console.log(`${index + 1}. Name: ${player.name}, Country: ${player.country}, Run Rate: ${player.runRate}`);
});

  
