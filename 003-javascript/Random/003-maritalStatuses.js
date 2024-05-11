let maritalStatuses = ["single", "married", "divorced", "widowed"];
let messages = [];

for (let status of maritalStatuses) {
  let message = "";

  if (status === "single") {
    message = "She is single and ready to mingle!";
  } else if (status === "married") {
    message = "She is happily married!";
  } else if (status === "divorced") {
    message = "She is divorced and loving life!";
  } else if (status === "widowed") {
    message = "She is widowed and cherishing memories!";
  } else {
    message = "Her marital status is unknown.";
  }

  messages.push(message);
}

console.log(messages);
