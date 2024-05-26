// Array of brothers' names and ages
const brothers = [
    { name: "John", age: 25 },
    { name: "Michael", age: 30 },
    { name: "David", age: 22 },
    { name: "Andrew", age: 28 },
    { name: "James", age: 27 },
    { name: "William", age: 26 },
    { name: "Robert", age: 24 }
  ];
  
  // Function to compare ages and rank brothers
  function rankBrothers(brothers) {
    const rankedBrothers = [];
  
    for (let i = 0; i < brothers.length; i++) {
      const brother = brothers[i];
      let rank = 1;
  
      for (let j = 0; j < brothers.length; j++) {
        if (i !== j) {
          if (brother.age < brothers[j].age) {
            rank++;
          }
        }
      }
  
      rankedBrothers.push({ ...brother, rank });
    }
  
    return rankedBrothers.sort((a, b) => a.rank - b.rank);
  }
  
  // Rank brothers by age
  const rankedBrothers = rankBrothers(brothers);
  
  console.log("Brothers ranked by age:");
  rankedBrothers.forEach((brother, index) => {
    console.log(`${index + 1}. ${brother.name} - Age: ${brother.age}, Rank: ${brother.rank}`);
  });
  