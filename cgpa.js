function calculateGPA(grades, credits) {
  if (grades.length !== credits.length) {
    return "Grade and credit arrays must have the same length.";
  }
  const totalCredits = credits.reduce((acc, credit) => acc + credit, 0);
  const weightedSum = grades.reduce((acc, grade, index) => acc + grade * credits[index], 0);
  return weightedSum / totalCredits;
}

const courseGrades = [3.7, 4.0, 3.3, 2.8];
const courseCredits = [3, 4, 3, 2];
console.log("GPA:", calculateGPA(courseGrades, courseCredits));
