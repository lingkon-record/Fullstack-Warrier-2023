let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("Start of the workweek.");
    break;

  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    console.log("Midweek days.");
    break;

  case "Friday":
    console.log("TGIF! It's Friday!");
    break;

  default:
    console.log("Weekend is near");
    break;
}

// day-off code
