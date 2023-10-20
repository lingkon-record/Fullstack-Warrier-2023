// comparing date
const date1 = new Date("2023-10-21");
const date2 = new Date("2023-10-22");
if (date1 < date2) {
  console.log("date1 is earlier than date2");
}

// manipulate dates
const date = new Date();
date.setDate(date.getDate() + 7); // Add 7 days
date.setHours(date.getHours() - 3); // Subtract 3 hours
console.log(date)

// specific

const currentDate = new Date(); // Current date and time
const specificDate = new Date("2023-10-21T12:00:00"); // Specific date and time

console.log("Current Date and Time: " + currentDate);
console.log("Specific Date and Time: " + specificDate);
