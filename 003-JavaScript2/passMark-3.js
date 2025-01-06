const marks = [85, 40, 55, 30, 70]; 
const passMark = 50; 

// Loop through the marks and use if-else to check pass or fail
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= passMark) {
    console.log(`Student ${i + 1}: She is PASS (Marks: ${marks[i]})`);
  } else {
    console.log(`Student ${i + 1}: She is FAIL (Marks: ${marks[i]})`);
  }
}
