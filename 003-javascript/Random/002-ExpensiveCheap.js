 // Car collection array with objects representing each car
const cars = [
  { brand: "Toyota", model: "Camry", price: 25000 },
  { brand: "Honda", model: "Civic", price: 22000 },
  { brand: "Ford", model: "Fusion", price: 27000 },
  { brand: "Chevrolet", model: "Malibu", price: 23000 },
  { brand: "Nissan", model: "Altima", price: 26000 }
];

// Function to find the most expensive car
function findMostExpensiveCar(cars) {
  let mostExpensiveCar = cars[0];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].price > mostExpensiveCar.price) {
      mostExpensiveCar = cars[i];
    }
  }
  return mostExpensiveCar;
}

// Function to find the cheapest car
function findCheapestCar(cars) {
  let cheapestCar = cars[0];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].price < cheapestCar.price) {
      cheapestCar = cars[i];
    }
  }
  return cheapestCar;
}

// Find the most expensive car
const mostExpensive = findMostExpensiveCar(cars);
console.log("Most expensive car:", mostExpensive.brand, mostExpensive.model, "- $", mostExpensive.price);

// Find the cheapest car
const cheapest = findCheapestCar(cars);
console.log("Cheapest car:", cheapest.brand, cheapest.model, "- $", cheapest.price);
