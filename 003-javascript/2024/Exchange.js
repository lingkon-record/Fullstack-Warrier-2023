// Method 1: Destructuring assignment
const data = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = data;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// Method 2: Object.assign()
const newData = { name: 'Jane', country: 'Canada' };
Object.assign(data, newData);

console.log(data); // Output: { name: 'Jane', age: 30, city: 'New York', country: 'Canada' }

// Method 3: Spread syntax
const { name: newName, ...rest } = data;

console.log(newName); // Output: Jane
console.log(rest); // Output: { age: 30, city: 'New York', country: 'Canada' }

// Method 4: Using functions
function extractData({ name, age, city }) {
    return { name, age, city };
}

const extractedData = extractData(data);

console.log(extractedData); // Output: { name: 'Jane', age: 30, city: 'New York' }
