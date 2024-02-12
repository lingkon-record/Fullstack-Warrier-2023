// Sample data structure representing your skills and specific company requirements
const yourSkills = {
  programmingLanguages: ['JavaScript', 'Python', 'Java'],
  frameworks: ['React', 'Node.js', 'Django'],
  databases: ['MongoDB', 'MySQL'],
  experience: '3+ years',
  problemSolving: true,
  communicationSkills: true,
};

const company1Requirements = {
  name: 'TechCo',
  programmingLanguages: ['JavaScript', 'Node.js', 'Python'],
  frameworks: ['React', 'Express'],
  databases: ['MongoDB'],
  experience: '2+ years',
  problemSolving: true,
  communicationSkills: true,
};

const company2Requirements = {
  name: 'InnovateCorp',
  programmingLanguages: ['Java', 'Python', 'C++'],
  frameworks: ['Spring', 'Flask'],
  databases: ['MySQL', 'PostgreSQL'],
  experience: '3+ years',
  problemSolving: true,
  communicationSkills: true,
};

// Function to check if you meet company requirements
function canApply(companyRequirements, skills) {
  const requiredSkills = Object.keys(companyRequirements);
  
  for (const skill of requiredSkills) {
    if (Array.isArray(companyRequirements[skill])) {
      const intersection = companyRequirements[skill].filter(value => skills[skill].includes(value));
      if (intersection.length === 0) {
        return false;
      }
    } else if (companyRequirements[skill] !== skills[skill]) {
      return false;
    }
  }

  return true;
}

// Check if you can apply to TechCo
const canApplyToTechCo = canApply(company1Requirements, yourSkills);

// Check if you can apply to InnovateCorp
const canApplyToInnovateCorp = canApply(company2Requirements, yourSkills);

// Display specific feedback
console.log(`Can you apply to ${company1Requirements.name}? ${canApplyToTechCo ? 'Yes' : 'No'}`);
console.log(`Can you apply to ${company2Requirements.name}? ${canApplyToInnovateCorp ? 'Yes' : 'No'}`); 
