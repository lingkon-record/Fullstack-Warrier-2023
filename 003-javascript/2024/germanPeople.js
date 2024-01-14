 
let peopleData = [
  {
    name: "Person1",
    country: "Germany",
    residence: "Berlin",
    language: "German",
    education: {
      degree: "Computer Science",
      completion: true
    },
    workExperience: true
  },
  {
    name: "Person2",
    country: "France",
    residence: "Paris",
    language: "French",
    education: {
      degree: "Computer Science",
      completion: true
    },
    workExperience: false
  },
  {
    name: "Person3",
    country: "USA",
    residence: "New York",
    language: "English",
    education: {
      degree: "Computer Science",
      completion: true
    },
    workExperience: true
  },
  // Add more people as needed
];

// Filter German people who live in Leipzig, speak German, completed a computer science degree, and have work experience
let germanPeople = peopleData.filter(person => {
  return (
    person.country === "Germany" &&
    person.residence === "Leipzig" &&
    person.language === "German" &&
    person.education.degree === "Computer Science" &&
    person.workExperience
  );
});

console.log(germanPeople);
