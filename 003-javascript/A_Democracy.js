// Define government rules and terms by category
const governmentCategories = {
  privacy: [
    "Right to privacy",
    "Search and seizure",
    "Fourth Amendment rights",
    "Electronic surveillance"
  ],
  freedom: [
    "Freedom of speech",
    "Freedom of the press",
    "Freedom of assembly",
    "Freedom of religion"
  ],
  justice: [
    "Due process of law",
    "Equal protection under the law",
    "Eminent domain",
    "Criminal justice system"
  ]
};

// Function to generate and display a random government rule or term from a specific category
function generateRandomGovernmentRule(category) {
  const categoryTerms = governmentCategories[category];
  if (categoryTerms) {
    const randomIndex = Math.floor(Math.random() * categoryTerms.length);
    const randomRuleOrTerm = categoryTerms[randomIndex];
    console.log(`Random ${category} Rule/Term: ${randomRuleOrTerm}`);
  } else {
    console.log(`Category "${category}" not found.`);
  }
}

// Call the function to display a random government rule/term from a specific category
generateRandomGovernmentRule("privacy");
generateRandomGovernmentRule("freedom");
generateRandomGovernmentRule("justice");
