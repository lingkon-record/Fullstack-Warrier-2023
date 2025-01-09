// Example data
var people = [
    { name: "Limon" },
    { name: "Ayesha" },
    { name: "Rohan" },
    { name: "Sadia" },
    { name: "Mohammad Arif Hasan" },
    { name: "Nabila Akhter" }
  ];
  
  // Find name with the highest index (longest name)
  var longestName = "";
  for (var i = 0; i < people.length; i++) {
    if (people[i].name.length > longestName.length) {
      longestName = people[i].name;
    }
  }
  
  // Output the result
  console.log("The name with the highest index (longest): " + longestName);