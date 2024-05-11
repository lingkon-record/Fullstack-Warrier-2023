let maritalStatus = "married";
let message;

switch (maritalStatus) {
  case "single":
    message = "She is single and ready to mingle!";
    break;
  case "married":
    message = "She is happily married!";
    break;
  case "divorced":
    message = "She is divorced and loving life!";
    break;
  default:
    message = "Her marital status is unknown.";
}

console.log(message);
