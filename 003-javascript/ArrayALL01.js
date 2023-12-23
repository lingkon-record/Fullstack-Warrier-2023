let myArray = [1, 2, 3];

// Array length
console.log("Array length:", myArray.length);

// Array toString()
console.log("Array as string:", myArray.toString());

// Array pop()
console.log("Pop last element:", myArray.pop(), "- Updated Array:", myArray);

// Array push()
myArray.push(4);
console.log("Pushed element 4:", myArray);

// Array shift()
console.log("Shift first element:", myArray.shift(), "- Updated Array:", myArray);

// Array unshift()
myArray.unshift(0);
console.log("Unshifted element 0:", myArray);

// Array join()
let joinedArray = myArray.join("-");
console.log("Joined Array:", joinedArray);

// Array delete() (Note: This leaves an undefined gap)
delete myArray[1];
console.log("Array after delete:", myArray);

// Array concat()
let newArray = myArray.concat([5, 6]);
console.log("Concatenated Arrays:", newArray);

// Array flat() (Assuming a nested array)
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log("Flattened Array:", flatArray);

// Array splice()
let splicedArray = myArray.splice(1, 1, 10);
console.log("Spliced Array:", myArray);

// Array slice()
let slicedArray = myArray.slice(1, 3);
console.log("Sliced Array:", slicedArray);
