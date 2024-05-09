
// Function to generate random Pakistani names
function generateName(gender) {
  const maleNames = ['Mohammad', 'Ali', 'Hassan', 'Hussein', 'Zain', 'Omar', 'Usman', 'Ahmed', 'Amir', 'Farhan'];
  const femaleNames = ['Ayesha', 'Fatima', 'Khadija', 'Zainab', 'Sara', 'Aisha', 'Mariam', 'Nadia', 'Sadia', 'Amina'];
  const names = gender === 'Male' ? maleNames : femaleNames;
  return names[Math.floor(Math.random() * names.length)];
}

// Generate family data
const familyData = [];
const wives = ['Ayesha', 'Fatima', 'Khadija', 'Zainab'];

wives.forEach(wife => {
  const children = [];
  for (let i = 0; i < 3; i++) {
    children.push({
      name: generateName('Male'),
      gender: 'Son',
      birthdate: new Date(1980 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28))
    });
    children.push({
      name: generateName('Female'),
      gender: 'Daughter',
      birthdate: new Date(1980 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28))
    });
  }
  familyData.push({ wife, children });
});

// Function to log birth dates based on wife
function logBirthDates(wifeName) {
  const wifeData = familyData.find(data => data.wife === wifeName);
  if (wifeData) {
    console.log(`Birthdates for ${wifeName}:`);
    wifeData.children.forEach(child => {
      console.log(`${child.name} (${child.gender}): ${child.birthdate.toDateString()}`);
    });
  } else {
    console.log(`No data found for ${wifeName}`);
  }
}

// Test by logging birth dates for each wife
wives.forEach(wife => logBirthDates(wife));
