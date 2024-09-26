// for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}


// do while
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);


//  Using Array.from with forEach:
Array.from({ length: 6 }, (_, i) => console.log(i));

// forEach
[0, 1, 2, 3, 4, 5].forEach(i => console.log(i));

//  Using recursion:
function printNumbers(n) {
  if (n > 5) return;
  console.log(n);
  printNumbers(n + 1);
}

printNumbers(0);



// Using setInterval (prints every 1 second)

let i = 0;
const interval = setInterval(() => {
  console.log(i);
  i++;
  if (i > 5) {
    clearInterval(interval);
  }
}, 1000);  // 1 second interval

