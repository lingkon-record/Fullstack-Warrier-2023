 // Example 1: Checking multiple conditions
let isRaining = true;
let isSunny = false;

if (isRaining) {
  console.log("Remember to take an umbrella.");
} else if (isSunny) {
  console.log("Don't forget to wear sunscreen.");
} else {
  console.log("Enjoy the weather!");
}

// Example 2: Grading system
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example 3: Checking for both conditions
let hasPassport = true;
let hasVisa = false;

if (hasPassport && hasVisa) {
  console.log("You can travel abroad.");
} else if (hasPassport) {
  console.log("Apply for a visa to travel.");
} else {
  console.log("Get a passport first.");
}

// Example 4: Multiple else if conditions
let time = 18;

if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else if (time < 22) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

// Example 5: Complex conditions
let isUserLoggedIn = true;
let isAdmin = false;

if (isUserLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in.");
}
