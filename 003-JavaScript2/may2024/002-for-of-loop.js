const shoppingCart = { banana: 2, apple: 5, cherry: 0 };

for (const fruit in shoppingCart) {
  console.log(fruit);
}

// value access
const inventory = { notebook: 10, pen: 20, eraser: 5 };

for (const item in inventory) {
  console.log(inventory[item]);
}

// reverse
const products = ['notebook', 'pen', 'eraser'];

for (let index = products.length - 1; index >= 0; index -= 1) {
  console.log(`${index}. ${products[index]}`);
}

// Looping Through Arrays
const fish = ['salmon', 'clown', 'whiting'];

for (let i = 0; i < fish.length; i++) {
  console.log(fish[i]);
}

// Looping Through Objects
const objectK = {
    name: 'Codecademy',
    age: 10,
  };
  
  const myEntries = Object.entries(objectK);
  
  console.log(myEntries);

  // Break Keyword
  for (let i = 0; i < 99; i += 1) {
    if (i > 5) {
      break;
    }
    console.log(i);
  }
  
  // print ali
  for (let count = 0; count < 5; count += 1) {
    console.log("Ali");
  }
  
