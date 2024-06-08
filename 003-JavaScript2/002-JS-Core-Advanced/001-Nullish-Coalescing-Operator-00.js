const footballTeam = {
  name: 'City FC',
  stadium: null,
  manager: undefined,
  captain: 'John Doe',
  established: 1880,
  trophies: 0
};

// Using Nullish Coalescing Operator (??) ,, provide default values
const teamName = footballTeam.name ?? 'Unknown Team';
const stadium = footballTeam.stadium ?? 'Unknown Stadium';
const manager = footballTeam.manager ?? 'No Manager Assigned';
const captain = footballTeam.captain ?? 'No Captain';
const established = footballTeam.established ?? 'Unknown Year';
const trophies = footballTeam.trophies ?? 'No Trophies';


console.log(`Team Name: ${teamName}`);
console.log(`Stadium: ${stadium}`);
console.log(`Manager: ${manager}`);
console.log(`Captain: ${captain}`);
console.log(`Established: ${established}`);
console.log(`Trophies Won: ${trophies}`);
