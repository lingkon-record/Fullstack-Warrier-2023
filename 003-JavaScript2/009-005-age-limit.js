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

let ageLimit = 25;

let eligiblePeople = people.filter(person => person.age <= ageLimit);

eligiblePeople.forEach(person => {
    person.score = person.skills.length;
});

eligiblePeople.sort((a, b) => b.score - a.score);

eligiblePeople.forEach((person, index) => {
    console.log(`${index + 1}. Name: ${person.name}, Age: ${person.age}, Degree: ${person.degree}, Skills: ${person.skills.join(", ")}, Score: ${person.score}`);
});
