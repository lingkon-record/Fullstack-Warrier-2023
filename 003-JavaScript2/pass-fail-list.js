const subjectsAndMarks = [
  { subject: "Bangla", mark: 40 },
  { subject: "English", mark: 35 },
  { subject: "Mathematics", mark: 28 },
  { subject: "Elementary Science", mark: 45 },
  { subject: "Bangladesh & Global Studies", mark: 38 },
  { subject: "Islam & Moral Education", mark: 30 }
];

// Define pass mark
const passMark = 33;

// Arrays to store pass and fail subjects
let passSubjects = [];
let failSubjects = [];

// Check pass/fail for each subject
subjectsAndMarks.forEach(subject => {
  if (subject.mark >= passMark) {
    passSubjects.push(subject.subject);
  } else {
    failSubjects.push(subject.subject);
  }
});

// Output the result
console.log("Pass Subjects:", passSubjects);
console.log("Fail Subjects:", failSubjects);
