// Passed by Value and Passed by Reference Examples

// Passed by Value Example
function modifyValue(value) {
    value = 10; // Changes to the value parameter do not affect the original variable
}

var num = 5;
modifyValue(num);
console.log(num); // Result: 5

// Passed by Reference Example
function modifyArray(arr) {
    arr.push(4); // Changes to the array parameter affect the original array
}

var myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Result: [1, 2, 3, 4]

// Explicitly Passing by Reference (using an object)
function modifyObject(obj) {
    obj.value = "modified"; // Changes to the object property affect the original object
}

var myObject = { value: "original" };
modifyObject(myObject);
console.log(myObject.value); // Result: "modified"
