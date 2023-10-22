


setTimeout(() => {
  console.log("After 2 seconds");
}, 2000);
console.log("Middle");
setTimeout(() => {
  console.log("After 4 seconds");
}, 4000);



function fetchData(url) {
  setTimeout(() => {
    console.log(`Data fetched from ${url}`);
  }, Math.random() * 3000); // Simulate varying response times
}

fetchData("API/endpoint1");
fetchData("API/endpoint2");
fetchData("API/endpoint3");






console.log("Start");
setTimeout(() => {
  console.log("Async operation completed");
}, 3000);
console.log("End");




let playerHealth = 100;

function attackEnemy() {
  console.log("Player attacks!");
  setTimeout(() => {
    const damage = Math.floor(Math.random() * 20);
    playerHealth -= damage;
    console.log(`Enemy hit for ${damage} damage. Player health: ${playerHealth}`);
  }, 1000);
}

attackEnemy();
attackEnemy();
attackEnemy();


