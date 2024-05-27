const schools = [
    { name: "School A", passFailData: { pass: 80, fail: 20 }, rate: 4.5 },
    { name: "School B", passFailData: { pass: 90, fail: 10 }, rate: 4.8 },
    { name: "School C", passFailData: { pass: 70, fail: 30 }, rate: 4.2 },
    { name: "School D", passFailData: { pass: 85, fail: 15 }, rate: 4.6 },
    { name: "School E", passFailData: { pass: 95, fail: 5 }, rate: 4.9 }
  ];
  
  // Rank schools based on pass/fail data and rate
  schools.sort((a, b) => {
    // First, compare pass rate
    const passRateComparison = b.passFailData.pass - a.passFailData.pass;
    if (passRateComparison !== 0) {
      return passRateComparison;
    }
    
    // If pass rates are the same, compare fail rate
    const failRateComparison = a.passFailData.fail - b.passFailData.fail;
    if (failRateComparison !== 0) {
      return failRateComparison;
    }
  
    // If fail rates are the same, compare rates
    return b.rate - a.rate;
  });
  
  console.log("Ranking of schools based on pass/fail data and rate:");
  schools.forEach((school, index) => {
    console.log(`${index + 1}. ${school.name} - Pass Rate: ${school.passFailData.pass}%, Fail Rate: ${school.passFailData.fail}%, Rate: ${school.rate}`);
  });
  