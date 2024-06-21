// Example array with nested arrays and objects
const data = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  [
    'apple',
    'banana',
    'orange',
    { type: 'grape', color: 'purple' }
  ]
];

// Logging -- the entire data array
console.log('Data array:', data);

// Accessing and logging specific elements
console.log('First element:', data[0]);
console.log('Fourth element:', data[3]);

// Accessing and logging specific elements -- within nested arrays and objects
console.log('Third name:', data[2].name);
console.log('Grape type:', data[3][3].type);
