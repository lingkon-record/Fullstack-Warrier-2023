const oceans = [
  { name: 'Pacific Ocean', humans: true },
  { name: 'Atlantic Ocean', humans: true },
  { name: 'Indian Ocean', humans: false },
  { name: 'Southern Ocean', humans: true },
  { name: 'Arctic Ocean', humans: false },
  { name: 'Antarctic Ocean', humans: false },
  { name: 'Mediterranean Sea', humans: true },
];

// Remove oceans where humans are not present
const oceansWithHumans = oceans.filter(ocean => ocean.humans);

// Display updated array in console
console.log('Oceans with Humans:', oceansWithHumans);
