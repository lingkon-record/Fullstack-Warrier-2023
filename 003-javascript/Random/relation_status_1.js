
var people = [
    { name: "Limon", status: "single" },
    { name: "Ayesha", status: "married" },
    { name: "Rohan", status: "divorced" },
    { name: "Sadia", status: "married" },
    { name: "Arif", status: "single" },
    { name: "Nabila", status: "divorced" }
  ];
  
 
  var single = [];
  var married = [];
  var divorced = [];
  

  for (var i = 0; i < people.length; i++) {
    if (people[i].status === "single") {
      single.push(people[i].name);
    } else if (people[i].status === "married") {
      married.push(people[i].name);
    } else if (people[i].status === "divorced") {
      divorced.push(people[i].name);
    }
  }
  
  
  console.log("Single: " + single.join(", "));
  console.log("Married: " + married.join(", "));
  console.log("Divorced: " + divorced.join(", "));