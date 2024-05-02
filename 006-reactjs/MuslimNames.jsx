import React, { useState } from 'react';

const names = {
  A: ["Aisha", "Abdullah", "Ahmed", "Amira", "Ali", "Amina"],
  B: ["Bilal", "Basim", "Bader", "Bahira", "Bashir", "Batul"],
  C: ["Cemal", "Cihad", "Cemil", "Cennet", "Cahit", "Celal"],
  D: ["Dawud", "Dalia", "Daud", "Diyar", "Dalal", "Danish"],
  E: ["Eid", "Eman", "Ehsan", "Ezra", "Elham", "Elif"],
  F: ["Fatima", "Faris", "Faisal", "Fawzia", "Fadil", "Faiza"],
  G: ["Ghulam", "Ghazala", "Ghalib", "Gulzar", "Gulnar", "Gulzar"],
  H: ["Hassan", "Hadi", "Huda", "Hafsa", "Hasan", "Hamza"],
  I: ["Ibrahim", "Isra", "Ismail", "Iman", "Iqbal", "Iffat"],
  J: ["Jamal", "Jalal", "Jasmin", "Jibril", "Jawad", "Jamil"],
  K: ["Khalid", "Khadija", "Kamran", "Kausar", "Kareem", "Khurshid"],
  L: ["Layla", "Lina", "Luqman", "Latif", "Lamia", "Lutfi"],
  M: ["Mohammed", "Mariam", "Mustafa", "Muna", "Mahmoud", "Mehmet"],
  N: ["Nasir", "Nadia", "Najib", "Nour", "Naima", "Nadia"],
  O: ["Omar", "Othman", "Osman", "Omar", "Ola", "Ozlem"],
  P: ["Parvez", "Pari", "Pervin", "Parisa", "Pakiza", "Peyman"],
  Q: ["Qasim", "Qamar", "Qadir", "Qamar", "Qadira", "Qudsia"],
  R: ["Rashid", "Rania", "Raza", "Rabia", "Rahim", "Rafi"],
  S: ["Saeed", "Sana", "Salman", "Samira", "Safiyah", "Safi"],
  T: ["Tariq", "Talha", "Tasneem", "Tahira", "Tahir", "Tayyib"],
  U: ["Usman", "Umar", "Umair", "Umm", "Uzma", "Umayma"],
  V: ["Vahid", "Veda", "Vakil", "Vasim", "Vafa", "Vivek"],
  W: ["Wahid", "Warda", "Waseem", "Wali", "Wajid", "Wafa"],
  X: ["Xavier", "Xena", "Xerxes", "Xyla", "Xabat", "Xia"],
  Y: ["Yusuf", "Yasmin", "Yasin", "Yasir", "Yusra", "Yahya"],
  Z: ["Zayn", "Zahra", "Zakir", "Zara", "Zafar", "Zoha"]
};

const MuslimName = () => {
    const [input, setInput] = useState('');
    const [suggestedNames, setSuggestedNames] = useState([]);
    
    const suggestName = () => {
      const upperInput = input.toUpperCase();
      
      if (upperInput.length === 1 && upperInput >= "A" && upperInput <= "Z") {
        const namesArray = names[upperInput] || [];
        setSuggestedNames(namesArray);
      } else {
        setSuggestedNames([]);
      }
    };
    
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg shadow-md p-8 w-96">
          <h1 className="text-3xl font-bold mb-4 text-center">Muslim Name Idea</h1>
          <div className="flex items-center justify-center mb-4">
            <input 
              type="text" 
              id="input" 
              maxLength="1" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-12 text-center"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              className="ml-2 px-6 py-2 bg-green-500 text-white font-semibold rounded-md transition duration-300 ease-in-out hover:bg-green-600"
              onClick={suggestName}
            >
              Submit
            </button>
          </div>
          <div id="output" className="mt-2 text-left">
            {suggestedNames.length > 0 ? (
              <>
                <h2 className="text-xl font-semibold mb-2">{input.toUpperCase()}</h2>
                <ul>
                  {suggestedNames.map((name, index) => (
                    <li key={index} className="mb-1">{index + 1}. {name}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-600">No Islamic names found for '{input}'.</p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default MuslimName;
