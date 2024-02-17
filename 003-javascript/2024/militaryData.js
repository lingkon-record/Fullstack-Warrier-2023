

// Define the military data object
const militaryData = {
  officers: [
    {
      rank: "Senior Officer",
      salaryPercentage: 100,
    },
    {
      rank: "Junior Officer",
      salaryPercentage: 70,
    },
    {
      rank: "Retirement Officer",
      salaryPercentage: 50,
    },
    // Add more officers as needed
  ],
};

// Function to get salary percentage based on officer's rank
function getSalaryPercentage(rank) {
  const selectedOfficer = militaryData.officers.find(officer => officer.rank.toLowerCase() === rank.toLowerCase());
  return selectedOfficer ? selectedOfficer.salaryPercentage : "Invalid rank";
}

// Example of using the military data
const officerRank = "Junior Officer"; // Change this to test different ranks

// Calculate salary based on the selected officer's rank
const salary = getSalaryPercentage(officerRank);

// Log the output to the console
console.log(`For ${officerRank}, the salary percentage is ${salary}%`);
