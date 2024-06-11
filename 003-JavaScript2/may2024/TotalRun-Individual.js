 // main.js

// Arrays to store the runs for each team
const teamA = [50, 30, 70]; // Runs scored while playing for Team A
const teamB = [20, 80, 10]; // Runs scored while playing for Team B
const teamC = [40, 60, 50]; // Runs scored while playing for Team C

// Function to calculate total runs from an array of runs
function calculateTotalRuns(runsArray) {
  let totalRuns = 0;
  for (let i = 0; i < runsArray.length; i++) {
    totalRuns += runsArray[i];
  }
  return totalRuns;
}

// Calculate total runs for each team
const totalRunsTeamA = calculateTotalRuns(teamA);
const totalRunsTeamB = calculateTotalRuns(teamB);
const totalRunsTeamC = calculateTotalRuns(teamC);

// Calculate overall total runs
const overallTotalRuns = totalRunsTeamA + totalRunsTeamB + totalRunsTeamC;

// Output the results
console.log(`Total runs for Team A: ${totalRunsTeamA}`);
console.log(`Total runs for Team B: ${totalRunsTeamB}`);
console.log(`Total runs for Team C: ${totalRunsTeamC}`);
console.log(`Overall total runs: ${overallTotalRuns}`);
