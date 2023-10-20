// array__ join

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);

// random

const myNumber = Math.random();
console.log(myNumber)

// this
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

// this
const car = {
    brand: "Toyota",
    start: function () {
        console.log(`Starting ${this.brand} car.`);
    }
};

car.start(); 




