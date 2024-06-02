// Step 1: Define the array with person objects
let people = [
    {
        name: "Arjun",
        age: 30,
        degree: "BSc",
        skills: ["JavaScript", "HTML", "CSS"]
    },
    {
        name: "Bhavna",
        age: 25,
        degree: "MSc",
        skills: ["Python", "Machine Learning"]
    },
    {
        name: "Chirag",
        age: 28,
        degree: "PhD",
        skills: ["Java", "Spring", "Hibernate", "SQL"]
    },
    {
        name: "Divya",
        age: 35,
        degree: "BEng",
        skills: ["C++", "Embedded Systems"]
    }
];

// Step 2: Define the age limit
let ageLimit = 30;

// Step 3: Define the scores for each degree
let degreeScores = {
    "BSc": 2,
    "MSc": 3,
    "PhD": 5,
    "BEng": 2
};

// Step 4: Filter out people who exceed the age limit
let eligiblePeople = people.filter(person => person.age <= ageLimit);

// Step 5: Calculate score for each person based on the degree and number of skills
eligiblePeople.forEach(person => {
    let degreeScore = degreeScores[person.degree] || 0;
    person.score = degreeScore + person.skills.length;
});

// Step 6: Sort the array based on the score in descending order
eligiblePeople.sort((a, b) => b.score - a.score);

// Step 7: Display each eligible person with their position, score, and details
eligiblePeople.forEach((person, index) => {
    console.log(`${index + 1}. Name: ${person.name}, Age: ${person.age}, Degree: ${person.degree}, Skills: ${person.skills.join(", ")}, Score: ${person.score}`);
});
