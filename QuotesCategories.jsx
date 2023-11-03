import React, { useState } from 'react';

const QuoteGenerator = () => {
  const [selectedCategory, setSelectedCategory] = useState('inspiration');
  const [quotes, setQuotes] = useState([]);

  const categories = ['inspiration', 'motivation', 'wisdom', 'funny'];

  const quotesData = {
    inspiration: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
      // Add more inspiration quotes ,hmm
    ],
    motivation: [
      "It does not matter how slowly you go as long as you do not stop. - Confucius",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      // Add more motivation quotes
    ],
    wisdom: [
      "The only true wisdom is in knowing you know nothing. - Socrates",
      "If you judge people, you have no time to love them. - Mother Teresa",
      // Add more wisdom quotes
    ],
    funny: [
      "I'm writing a book. I've got the page numbers done. - Steven Wright",
      "I used to be a banker, but I lost interest. - Unknown",
      // Add more funny quotes
    ],
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setQuotes(quotesData[category]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Quote Generator</h1>
      <div className="mb-4">
        <label htmlFor="categorySelect" className="text-sm font-semibold block">
          Select a category:
        </label>
        <select
          id="categorySelect"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        {quotes.length > 0 ? (
          <ul className="list-disc pl-4">
            {quotes.map((quote, index) => (
              <li key={index} className="mb-2 text-lg">
                {quote}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg font-semibold text-red-500">No quotes available for the selected category.</p>
        )}
      </div>
    </div>
  );
};

export default QuoteGenerator;
  
