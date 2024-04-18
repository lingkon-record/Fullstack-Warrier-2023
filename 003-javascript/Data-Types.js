 // String - example 
let myString = "Hello, JavaScript!";

// Number
let myNumber = 42;

// BigInt
let myBigInt = 9007199254740991n;

// Boolean
let isTrue = true;

// Undefined
let myUndefined;

// Null
let myNull = null;

// Symbol
let mySymbol = Symbol("uniqueSymbol");

// Object
let myObject = {
  propertyName: "propertyValue",
  numericProperty: 123,
  isWorking: true,
  myFunction: function() {
    console.log("Function inside object.");
  }
};

// Displaying values and types
console.log("String:", myString, typeof myString);
console.log("Number:", myNumber, typeof myNumber);
console.log("BigInt:", myBigInt, typeof myBigInt);
console.log("Boolean:", isTrue, typeof isTrue);
console.log("Undefined:", myUndefined, typeof myUndefined);
console.log("Null:", myNull, typeof myNull);
console.log("Symbol:", mySymbol, typeof mySymbol);
console.log("Object:", myObject, typeof myObject);

// Invoking the function inside the object
myObject.myFunction();
