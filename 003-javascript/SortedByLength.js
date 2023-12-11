// Define an extended list of international students with unique country names and lengths
const internationalStudents = [
  { name: 'Ali Khan', country: 'Pakistan' },
  { name: 'Nadia Ahmed', country: 'Qatar' },
  { name: 'Omar Hassan', country: 'Egypt' },
  { name: 'Laila Al-Farsi', country: 'Oman' },
  { name: 'Ahmed Malik', country: 'Saudi Arabia' },
  { name: 'Aisha Abbas', country: 'United Arab Emirates' },
  { name: 'Mustafa Ahmed', country: 'Iraq' },
  { name: 'Sara Al-Mansoori', country: 'Bahrain' },
  { name: 'Hassan El-Masri', country: 'Lebanon' },
  { name: 'Farida Ismail', country: 'Jordan' },
  { name: 'Khaled Abbas', country: 'Kuwait' },
  { name: 'Lina Hariri', country: 'Syria' },
  // Add more students with their respective countries
];

// Sort the array based on the length of country names in ascending order
internationalStudents.sort((a, b) => a.country.length - b.country.length);

// Display the sorted list
console.log('List of international students with real names and unique country lengths:');
internationalStudents.forEach(student => {
  console.log(`${student.name}: ${student.country}`);
});
