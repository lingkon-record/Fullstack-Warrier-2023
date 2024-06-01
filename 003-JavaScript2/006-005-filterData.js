
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


people.sort((a, b) => b.skills.length - a.skills.length);

// *************************************
let topTwoPeople = people.slice(0, 2);


console.log(topTwoPeople);
