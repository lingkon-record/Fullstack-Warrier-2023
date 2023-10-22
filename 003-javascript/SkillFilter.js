// Sample object with names and skill index counts
const skillData = {
  "Alice": 3,
  "Bob": 2,
  "Charlie": 4,
  "David": 1,
  "Eve": 3,
  "Frank": 2,
  "Grace": 4,
};

// Filter names with multiple skills
const multipleSkillsNames = Object.keys(skillData).filter(name => skillData[name] > 1);

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle the filtered names
shuffleArray(multipleSkillsNames);

// Pick the first 5 names
const pickedNames = multipleSkillsNames.slice(0, 5);

console.log(pickedNames);






// Skill 5+ list 

// Create an object with names and skill lists
const peopleSkills = {
  "Alice": ["Skill1", "Skill2", "Skill3", "Skill4"],
  "Bob": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Charlie": [ "Skill4", "Skill5"],
  "David": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Eve": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Frank": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Grace": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5",",kalo"],
};

// Sort the names based on the length of skill lists
const sortedNames = Object.keys(peopleSkills).sort((a, b) => peopleSkills[b].length - peopleSkills[a].length);

// Pick the top 5 names with the largest skill lists
const top5Names = sortedNames.slice(0, 5);

console.log(top5Names);




// Skill index ,

// Create an object with names and skill lists
const peopleSkills = {
  "Alice": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Bob": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Charlie": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "David": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Eve": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Frank": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Grace": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
};

// Sort the names based on the length of skill lists (largest to smallest)
const sortedNames = Object.keys(peopleSkills).sort((a, b) => peopleSkills[b].length - peopleSkills[a].length);

// Display all names and their skill list numbers
sortedNames.forEach((name, index) => {
  console.log(`${index + 1}. ${name} - ${peopleSkills[name].length} skills`);
});






// But I have a. Issues,, if some have same amount of skill , then And mention them in same digit list number , then count next number. Otherwise not

// Create an object with names and skill lists
const peopleSkills = {
  "Alice": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Bob": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Charlie": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "David": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5",,"666"],
  "Eve": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Frank": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Grace": ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5"],
  "Hannah": ["Skill1", "Skill2", "Skill3"],
  "Ivy": ["Skill1", "Skill2", "Skill3"],
  "Jack": ["Skill1", "Skill2"],
};

// Sort the names based on the length of skill lists (largest to smallest)
const sortedNames = Object.keys(peopleSkills).sort((a, b) => peopleSkills[b].length - peopleSkills[a].length);

// Display all names with the same skill count in the same list number
let currentSkillCount = -1;
let listNumber = 1;

sortedNames.forEach((name, index) => {
  const skillCount = peopleSkills[name].length;
  
  if (skillCount !== currentSkillCount) {
    listNumber++;
    currentSkillCount = skillCount;
  }

  console.log(`${listNumber}. ${name} - ${peopleSkills[name].length} skills`);
});

      
