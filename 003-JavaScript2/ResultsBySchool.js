 // Define arrays
const names = ["Alice", "Bob", "Charlie", "David", "Eva"];
const schools = ["School A", "School B", "School A", "School C", "School B"];
const results = [85, 92, 78, 88, 95];

// Define the threshold for good results
const goodResultThreshold = 80;

// Function to filter and sort good results by school
function getGoodResultsBySchool(schoolName) {
    let goodResults = [];
    
    for (let i = 0; i < names.length; i++) {
        if (schools[i] === schoolName && results[i] >= goodResultThreshold) {
            goodResults.push({
                name: names[i],
                school: schools[i],
                result: results[i]
            });
        }
    }
    
    // Sort results from highest to lowest
    goodResults.sort((a, b) => b.result - a.result);
    
    return goodResults;
}

// List of schools to check
const schoolList = ["School A", "School B", "School C"];

// Get good results for each school and print them separately
schoolList.forEach(school => {
    console.log(Good results for ${school}:);
    const goodResults = getGoodResultsBySchool(school);
    goodResults.forEach(result => {
        console.log(${result.name}: ${result.result});
    });
    console.log('\n');
});
