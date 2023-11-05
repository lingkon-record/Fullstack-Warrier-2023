
const recipes = [
    "Spaghetti Carbonara",
    "Chicken Stir-Fry",
    "Vegetable Lasagna",
    "Grilled Salmon with Lemon",
    "Taco Salad",
    "Mushroom Risotto",
    "Homemade Pizza",
    "Beef and Broccoli",
    "Pasta Alfredo",
    "Vegetable Curry"
];


function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}


console.log("Today's cooking suggestion:");
console.log(getRandomRecipe());
