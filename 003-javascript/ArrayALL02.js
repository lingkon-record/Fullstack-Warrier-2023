 let studentScores = [
  { name: "Ali", score: 85 },
  { name: "Sara", score: 92 },
  { name: "Ahmed", score: 78 }
];

// Array length
console.log("Number of students:", studentScores.length);

// Array toString()
console.log("Student scores as string:", studentScores.toString());

// Array pop()
console.log("Removed last student:", studentScores.pop(), "- Updated Scores:", studentScores);

// Array push()
studentScores.push({ name: "Fatima", score: 89 });
console.log("Added Fatima's score:", studentScores);

// Array shift()
console.log("Removed first student:", studentScores.shift(), "- Updated Scores:", studentScores);

// Array unshift()
studentScores.unshift({ name: "Khan", score: 95 });
console.log("Added Khan's score:", studentScores);

// Array join()
let scoreSummary = studentScores.map(student => `${student.name}: ${student.score}`);
let joinedScores = scoreSummary.join(", ");
console.log("Joined Student Scores:", joinedScores);

// Array delete() (Note: Avoid using delete for arrays; it leaves gaps)
delete studentScores[1];
console.log("Student scores after delete:", studentScores);

// Array concat()
let additionalScores = [{ name: "Zainab", score: 88 }, { name: "Tariq", score: 75 }];
let combinedScores = studentScores.concat(additionalScores);
console.log("Combined Student Scores:", combinedScores);

// Array splice() (Let's say we want to update Ahmed's score)
studentScores.splice(1, 1, { name: "Ahmed", score: 80 });
console.log("Updated Ahmed's score:", studentScores);

// Array slice()
let selectedStudents = studentScores.slice(0, 2);
console.log("Selected top 2 students:", selectedStudents);
