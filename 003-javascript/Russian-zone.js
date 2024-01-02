 // Function to analyze conflicts in Russia
function analyzeConflictsInRussia(conflicts) {
    const democratsTerritories = [];
    const conflictedTerritories = [];

    // Separate territories based on Democrats or conflicted
    conflicts.forEach((conflict) => {
        if (conflict.includes("Democrats")) {
            democratsTerritories.push(conflict);
        } else {
            conflictedTerritories.push(conflict);
        }
    });

    // Display the results
    console.log("Territories associated with Democrats:", democratsTerritories);
    console.log("Conflicted Territories:", conflictedTerritories);
}

// Example conflicts array
const conflictsInRussia = [
    "Siberia - Democrats",
    "Chechnya - Conflicted",
    "Moscow - Democrats",
    "Kamchatka - Conflicted",
    "St. Petersburg - Democrats",
    "Kaliningrad - Conflicted",
];

// Analyze conflicts in Russia
analyzeConflictsInRussia(conflictsInRussia);
