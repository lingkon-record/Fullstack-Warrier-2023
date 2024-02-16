 let bangladeshiStudents = [
  { name: "Nadia Rahman", age: 21, bornCity: "Dhaka", score: 88 },
  { name: "Farhan Ahmed", age: 20, bornCity: "Chittagong", score: 92 },
  { name: "Aisha Khan", age: 22, bornCity: "Rajshahi", score: 85 },
  { name: "Rahim Khan", age: 19, bornCity: "Khulna", score: 78 },
  { name: "Tahmina Islam", age: 23, bornCity: "Sylhet", score: 95 },
  { name: "Imran Ali", age: 20, bornCity: "Barisal", score: 86 },
  { name: "Maliha Akter", age: 21, bornCity: "Comilla", score: 90 },
  { name: "Shahid Hasan", age: 22, bornCity: "Mymensingh", score: 91 },
  { name: "Sadia Ahmed", age: 19, bornCity: "Dinajpur", score: 79 },
  { name: "Kamal Hossain", age: 24, bornCity: "Jessore", score: 94 },
  // Add more students as needed
];

// Sort students array based on age in descending order (elder to junior)
bangladeshiStudents.sort((a, b) => b.age - a.age);

console.log(bangladeshiStudents);
