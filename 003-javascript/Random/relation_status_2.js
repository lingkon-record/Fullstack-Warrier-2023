// Example data
var people = [
    { name: "Limon", status: "single" },
    { name: "Ayesha", status: "married" },
    { name: "Rohan", status: "divorced" },
    { name: "Sadia", status: "married" },
    { name: "Arif", status: "single" },
    { name: "Nabila", status: "divorced" }
  ];
  
  // Grouping logic
  var grouped = { single: [], married: [], divorced: [] };
  
  for (var i = 0; i < people.length; i++) {
    grouped[people[i].status].push(people[i].name);
  }
  
  // Output the results
  console.log("Single: " + grouped.single.join(", "));
  console.log("Married: " + grouped.married.join(", "));
  console.log("Divorced: " + grouped.divorced.join(", "));