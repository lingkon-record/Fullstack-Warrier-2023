// Create a data structure for a city (Harry) and its unique rule
const cityData = { name: "Harry", rule: "Speeding" };

// Define punishments for rules
const rulePunishments = {
  "Speeding": "Traffic Fine",
  "Parking Violation": "Parking Ticket",
  "Noise Complaint": "Noise Citation",
};

// Function to match the rule to a punishment
function matchRuleToPunishment(cityData) {
  const rule = cityData.rule;
  const punishment = rulePunishments[rule];
  if (punishment) {
    return punishment;
  } else {
    return "No punishment defined for the rule.";
  }
}

// Call the function to get the punishment for Harry's rule
const punishment = matchRuleToPunishment(cityData);
console.log(`Punishment for ${cityData.name}'s rule (${cityData.rule}): ${punishment}`);
