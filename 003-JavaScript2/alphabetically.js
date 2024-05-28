
const cities = [
  { name: "Shanghai", population: 26317104 },
  { name: "Sao Paulo", population: 21846507 },
  { name: "Mexico City", population: 21671908 },
  { name: "Cairo", population: 20484965 },
  { name: "Dhaka", population: 20283552 },
  { name: "Mumbai", population: 20185064 },
  { name: "Beijing", population: 20035455 },
  { name: "Osaka", population: 19222665 }
];


cities.sort((a, b) => a.name.localeCompare(b.name));


cities.forEach(city => {
  console.log(`${city.name} (Population: ${city.population.toLocaleString()})`);
});
