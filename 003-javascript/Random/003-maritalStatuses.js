var maritalStatuses = ["single", "married", "divorced", "widowed"];
var message = "";

for (var i = 0; i < maritalStatuses.length; i++) {
  var status = maritalStatuses[i];
  
  if (status === "single") {
    message = "She is single and ready to mingle!";
    break;
  } else if (status === "married") {
    message = "She is happily married!";
    break;
  } else if (status === "divorced") {
    message = "She is divorced and loving life!";
    break;
  } else if (status === "widowed") {
    message = "She is widowed and cherishing memories!";
    break;
  } else {
    message = "Her marital status is unknown.";
  }
}

console.log(message);
