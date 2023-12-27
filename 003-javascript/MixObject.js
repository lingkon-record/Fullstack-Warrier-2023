// Example array with mixed indices pointing to the same object
const mixedArray = [];
const sharedObject = { value: 'Shared Object' };

mixedArray[0] = sharedObject;        // Numeric index
mixedArray['one'] = sharedObject;    // String index
mixedArray[2] = sharedObject;        // Numeric index

// Accessing elements using different indices
console.log(mixedArray[0]);          // Output: { value: 'Shared Object' }
console.log(mixedArray['one']);       // Output: { value: 'Shared Object' }
console.log(mixedArray[2]);           // Output: { value: 'Shared Object' }

// Modifying the shared object
sharedObject.value = 'Updated Value';

// Accessing elements again to see the shared changes
console.log(mixedArray[0]);          // Output: { value: 'Updated Value' }
console.log(mixedArray['one']);       // Output: { value: 'Updated Value' }
console.log(mixedArray[2]);           // Output: { value: 'Updated Value' }
