const students = [
    { name: "John", school: "Ideal School and College" },
    { name: "Alice", school: "RAJUK Uttara Model College" },
    { name: "Bob", school: "Jalalabad Cantonment Public School & College" },
    { name: "Sarah", school: "St. Joseph Higher Secondary School" },
    { name: "David", school: "Dhaka Residential Model College" },
    { name: "Emily", school: "Comilla Modern High School" },
    { name: "Michael", school: "Chittagong Collegiate School and College" },
    { name: "Emma", school: "Monipur Uccha Biddalaya and College" }
  ];
  
  // Find and log students from residential schools
  console.log("Students from residential schools:");
  students.forEach(student => {
    if (student.school.includes("Monipur")) {
      console.log(`${student.name} - ${student.school}`);
    }
  });
  