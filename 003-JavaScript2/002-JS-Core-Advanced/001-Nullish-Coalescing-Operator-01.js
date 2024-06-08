// Example football team object with nested structures
const footballTeam = {
  name: 'City FC',
  stadium: null,
  manager: {
    name: 'Jane Smith',
    experience: undefined
  },
  players: [
    { name: 'John Doe', position: 'Forward', goals: 15 },
    { name: 'Mike Black', position: 'Midfielder', goals: null },
    null,
    { name: 'Tom White', position: undefined, goals: 3 }
  ],
  established: 1880,
  trophies: 0
};

// Using Nullish Coalescing Operator (??) to provide default values
const teamName = footballTeam.name ?? 'Unknown Team';
const stadium = footballTeam.stadium ?? 'Unknown Stadium';

const managerName = footballTeam.manager?.name ?? 'No Manager';
const managerExperience = footballTeam.manager?.experience ?? 'No Experience';

const players = footballTeam.players ?? [];

players.forEach((player, index) => {
  const playerName = player?.name ?? `Unknown Player ${index + 1}`;
  const playerPosition = player?.position ?? 'Unknown Position';
  const playerGoals = player?.goals ?? 'No Goals Scored';
  
  console.log(`Player ${index + 1}:`);
  console.log(`  Name: ${playerName}`);
  console.log(`  Position: ${playerPosition}`);
  console.log(`  Goals: ${playerGoals}`);
});

const established = footballTeam.established ?? 'Unknown Year';
const trophies = footballTeam.trophies ?? 'No Trophies';

// Display the team information
console.log(`Team Name: ${teamName}`);
console.log(`Stadium: ${stadium}`);
console.log(`Manager Name: ${managerName}`);
console.log(`Manager Experience: ${managerExperience}`);
console.log(`Established: ${established}`);
console.log(`Trophies Won: ${trophies}`);
