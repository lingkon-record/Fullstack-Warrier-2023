const bookingSchedule = {};

function bookDay(person, day) {
  if (!bookingSchedule[day]) {
    bookingSchedule[day] = [person];
  } else {
    bookingSchedule[day].push(person);
  }
  console.log(`${person} booked on ${day}`);
}

function displayFullMonthSchedule() {
  console.log('Full Month Schedule:');
  for (const day in bookingSchedule) {
    console.log(`${day}: ${bookingSchedule[day].join(', ')}`);
  }
}

// Example usage:
bookDay('Alice', '2024-01-15');
bookDay('Bob', '2024-01-20');
bookDay('Charlie', '2024-01-15');
bookDay('Alice', '2024-01-25');

displayFullMonthSchedule();
