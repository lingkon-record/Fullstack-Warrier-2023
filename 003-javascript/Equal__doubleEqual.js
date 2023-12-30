// Using ==
console.log(1 == '1');  // true (coercion: string '1' is converted to a number)

// Using ===
console.log(1 === '1'); // false (strict comparison, different types)

// more 

// Using ==
console.log(5 == '5');    // true (coercion: string '5' is converted to a number)
console.log(true == 1);   // true (coercion: boolean true is converted to a number)
console.log(null == undefined);  // true (coercion: null is loosely equal to undefined)

// Using ===
console.log(5 === '5');   // false (strict comparison, different types)
console.log(true === 1);  // false (strict comparison, different types)
console.log(null === undefined);  // false (strict comparison, different types)
