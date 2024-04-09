// Suggestions for Dealing with Problems

// Define an object containing suggestions for different problems
const problemSuggestions = {
    addiction: [
        "Seek professional help and therapy.",
        "Join a support group or attend meetings.",
        "Practice mindfulness and self-awareness.",
        "Find healthy distractions and hobbies.",
        "Create a support network of friends and family."
    ],
    grief: [
        "Allow yourself to feel and express your emotions.",
        "Talk to a therapist or counselor.",
        "Engage in self-care activities like exercise or meditation.",
        "Seek support from friends and family.",
        "Consider joining a grief support group."
    ],
    anger: [
        "Practice deep breathing and relaxation techniques.",
        "Take a break and step away from the situation.",
        "Express your feelings calmly and assertively.",
        "Find healthy outlets for your anger, such as exercise or art.",
        "Seek therapy or anger management classes."
    ],
    abandonment: [
        "Acknowledge your feelings and allow yourself to grieve.",
        "Seek support from friends, family, or a therapist.",
        "Work on building self-esteem and self-worth.",
        "Practice self-compassion and forgiveness.",
        "Focus on building healthy relationships."
    ],
    anxiety: [
        "Practice deep breathing and relaxation exercises.",
        "Challenge negative thoughts and cognitive distortions.",
        "Create a routine and structure in your daily life.",
        "Limit caffeine and alcohol intake.",
        "Seek therapy or counseling for coping strategies."
    ],
    // Add more problems and corresponding suggestions as needed
};

// Function to get suggestions for a specific problem
function getSuggestionsForProblem(problem) {
    return problemSuggestions[problem] || ["No suggestions available for this problem."];
}

// Get suggestions for a specific problem and log them to the console
const problem = "anxiety";
const suggestions = getSuggestionsForProblem(problem);
console.log(`Suggestions for dealing with ${problem}:`);
suggestions.forEach((suggestion, index) => {
    console.log(`${index + 1}. ${suggestion}`);
});
