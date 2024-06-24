const students = [
     { name: "Ahmed Hossain", college: "Dhaka University", cgpa: 3.75 },
    { name: "Sumaiya Akter", college: "BUET", cgpa: 3.80 },
    { name: "Lingkon", college: "BUET", cgpa: 3.49 },
    { name: "Limon", college: "BUET", cgpa: 4.0 },
    { name: "Roki", college: "BUET", cgpa: 4.01 },
    { name: "Rafiq Islam", college: "Dhaka University", cgpa: 3.60 },
    { name: "Mithila Rahman", college: "NSU", cgpa: 3.90 },
    { name: "Nadia Khan", college: "Dhaka University", cgpa: 3.50 },
    { name: "Tanvir Ahmed", college: "BUET", cgpa: 2.90 },
    { name: "Rumana Sultana", college: "Dhaka University", cgpa: 4.00 }
];

// filter students by CGPA and college
function filterStudentsByCgpaAndCollege(students, minCgpa, maxCgpa, college) {
    return students.filter(student => 
        student.cgpa >= minCgpa && 
        student.cgpa <= maxCgpa && 
        student.college === college
    );
}

// range, institute
const filteredStudents = filterStudentsByCgpaAndCollege(students, 3.50, 4.00, "BUET");

console.log(filteredStudents);
