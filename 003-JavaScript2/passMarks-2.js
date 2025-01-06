
var student = {
  name: "Limon",
  marks: 35, 
  passMarks: 40 
};

var result = student.marks >= student.passMarks ? "passed" : "failed";
console.log(student.name + " has " + result + ".");
