let num1 = 10;

let num2 = 5;

let sum = num1 + num2;

let difference = num1 - num2;

let product = num1 * num2;

let quotient = num1 / num2;


console.log("Sum:", sum);

console.log("Difference:", difference);

console.log("Product:", product);

console.log("Quotient:", quotient);


// Next Example

let price = 20;

let taxRate = 0.08;

let discount = 0.1;


// Calculate the final price after tax and discount.

let totalPrice = price + (price * taxRate);

let finalPrice = totalPrice - (totalPrice * discount);


console.log("Total Price:", totalPrice);

console.log("Final Price after Discount:", finalPrice);



//  next

const price = 25.99;

const quantity = 5;

const taxRate = 0.1; // 10% tax

const totalPrice = price * quantity * (1 + taxRate);

console.log("Total Price: $" + totalPrice.toFixed(2));


// temperature

const celsius = 30;

const fahrenheit = (celsius * 9/5) + 32;

console.log(`${celsius}°C is equal to ${fahrenheit}°F`);



// Currency exchange

const usdToEurExchangeRate = 0.85;

const amountInUSD = 100;

const amountInEUR = amountInUSD * usdToEurExchangeRate;

console.log(`$${amountInUSD} is equivalent to €${amountInEUR.toFixed(2)}`);


// Time calculation

const startTime = new Date(2023, 0, 1, 10, 0); // January 1, 2023, 10:00 AM

const endTime = new Date(2023, 0, 1, 15, 30); // January 1, 2023, 3:30 PM

const durationInMinutes = (endTime - startTime) / (1000 * 60);

console.log(`The event duration is ${durationInMinutes} minutes.`);



// user input and calculation

const userInput = parseFloat(prompt("Enter a number:"));

if (!isNaN(userInput)) {

  const square = userInput * userInput;

  console.log(`The square of ${userInput} is ${square}`);

} else {

  console.log("Invalid input. Please enter a number.");

}



// shopping cart


const cart = [

  { item: "Shirt", price: 29.99 },

  { item: "Jeans", price: 49.99 },

  { item: "Shoes", price: 59.99 }

];

let total = 0;

cart.forEach(item => {

  total += item.price;

});

console.log("Total cost of items in the cart: $" + total.toFixed(2));
