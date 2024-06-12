const students = [
    { name: "John", school: "Ideal School and College" },
    { name: "Alice", school: "RAJUK Uttara College" },
    { name: "Bob", school: "Jalalabad Cantonment Public School & College" },
    { name: "Sarah", school: "Dhaka Junior School" },
    { name: "David", school: "Dhaka Residential Model College" },
    { name: "Emily", school: "Comilla Modern High School" },
    { name: "Michael", school: "Chittagong Collegiate School and College" },
    { name: "Emma", school: "Monipur Uccha Biddalaya and College" }
  ];
  
  students.forEach(student => {
    console.log(`${student.name} - ${student.school}`);
  });


  // list serials

  const studentsx = [
    { name: "Ali", school: "Lahore Grammar School" },
    { name: "Sana", school: "Beaconhouse School System" },
    { name: "Ahmed", school: "Roots Millennium Schools" },
    { name: "Fatima", school: "The City School" },
    { name: "Zain", school: "Army Public School & College" },
    { name: "Aisha", school: "International School of Choueifat" },
    { name: "Omar", school: "Educators School System" },
    { name: "Ayesha", school: "KIPS School" }
  ];
  
 
  studentsx.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.school}`);
  });
  


  // Rank

  const chatro = [
    { name: "Ali", school: "Lahore Grammar School", rank: 8 },
    { name: "Sana", school: "Beaconhouse School System", rank: 3 },
    { name: "Ahmed", school: "Roots Millennium Schools", rank: 2 },
    { name: "Fatima", school: "The City School", rank: 4 },
    { name: "Zain", school: "Army Public School & College", rank: 5 },
    { name: "Aisha", school: "International School of Choueifat", rank: 6 },
    { name: "Omar", school: "Educators School System", rank: 7 },
    { name: "Ayesha", school: "KIPS School", rank: 1 }
  ];
  
  // Sort students by rank
  chatro.sort((a, b) => a.rank - b.rank);
  
  console.log("All students sorted by school rank:");
  chatro.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} - ${student.school} (Rank: ${student.rank})`);
  });
  
  
