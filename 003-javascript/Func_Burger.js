// Define a functional component for an Offer
function createOffer(name, description) {
  return {
    name: name,
    description: description
  };
}

// Define a functional component for a Burger Package
function createBurgerPackage(name, price, offers) {
  return {
    name: name,
    price: price,
    offers: offers,
    display: function () {
      console.log("Package Name: " + this.name);
      console.log("Price: $" + this.price);
      console.log("Offers:");
      for (var i = 0; i < this.offers.length; i++) {
        console.log((i + 1) + ". " + this.offers[i].name + ": " + this.offers[i].description);
      }
    }
  };
}

// Create offers
var offer1 = createOffer("Buy One Get One", "Buy one burger, get a second one free.");
var offer2 = createOffer("Combo Deal", "Burger, fries, and a drink for a special price.");
var offer3 = createOffer("Family Pack", "4 burgers, 4 fries, and 4 drinks at a discounted rate.");

// Create a burger package with offers
var burgerPackage = createBurgerPackage("Deluxe Burger Package", 24.99, [offer1, offer2, offer3]);

// Display package details using console.log
burgerPackage.display();
