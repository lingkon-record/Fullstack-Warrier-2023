// call(), apply(), and bind() Methods Example

// call() Method
var person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var person2 = {
    firstName: "John",
    lastName: "Doe"
};

var result1 = person1.fullName.call(person2);
console.log(result1); // Result: "John Doe"

// apply() Method
var person3 = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
};

var person4 = {
    firstName: "Jane",
    lastName: "Smith"
};

var result2 = person3.fullName.apply(person4, ["New York", "USA"]);
console.log(result2); // Result: "Jane Smith, New York, USA"

// bind() Method
var person5 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

var person6 = {
    firstName: "Alice",
    lastName: "Johnson"
};

var fullNameFunction = person5.fullName.bind(person6);
console.log(fullNameFunction()); // Result: "Alice Johnson"
