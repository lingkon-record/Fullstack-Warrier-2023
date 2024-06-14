const players = [
  
  {
    name: 'Alice',
    habits: ['running', 'swimming']
  },
  
  {
    name: 'Bob',
    habits: ['cycling', 'reading']
  },
  
  {
    name: 'Charlie',
    habits: ['swimming', 'gaming']
  }
];

function findPlayersByHabit(habit) {
  
  const matchingPlayers = players.filter(player => player.habits.includes(habit));
  
  if (matchingPlayers.length > 0) {
    console.log('Players with the habit "' + habit + '":');
    matchingPlayers.forEach(player => console.log(player.name));
    
  } else {
    console.log('There is no one with the habit "' + habit + '".');
  }
}


findPlayersByHabit('swimming'); // Outputs: Alice, Charlie
findPlayersByHabit('gaming');   // Outputs: Charlie
findPlayersByHabit('dancing');  // Outputs: There is no one with the habit "dancing".
