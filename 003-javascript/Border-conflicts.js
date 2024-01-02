 function analyzeSituation(city, conflicts, territory, borderIssues) {
    function analyzeCity() {
        console.log(`City: ${city}`);
    }

    function analyzeConflicts() {
        console.log(`Conflicts: ${conflicts}`);
    }

    function analyzeTerritory() {
        console.log(`Territory: ${territory}`);
    }

    function analyzeBorderIssues() {
        console.log(`Border Issues: ${borderIssues}`);
    }

    // Call the internal functions
    analyzeCity();
    analyzeConflicts();
    analyzeTerritory();
    analyzeBorderIssues();
}

// Example usage with real Indian city and conflict territory names:
analyzeSituation("Mumbai", "Political tensions in Kashmir", "Disputed Kashmir region", "Indo-Pak border tensions");
