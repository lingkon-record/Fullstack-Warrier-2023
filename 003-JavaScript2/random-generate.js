const oldQuotes = [
    "Always be curious and never stop learning.",
    "Find a career that aligns with your passions.",
    "Networking is key to building your career.",
    // Add more 
];


function getRandomQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

// Get a random quote from the array
const randomQuote = getRandomQuote(oldQuotes);


console.log(randomQuote);
