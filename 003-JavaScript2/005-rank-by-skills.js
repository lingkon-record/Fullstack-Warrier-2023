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

// Step 2: Sort the array based on the number of skills in descending order
people.sort((a, b) => b.skills.length - a.skills.length);

// Step 3: Display the sorted array
console.log(people);
