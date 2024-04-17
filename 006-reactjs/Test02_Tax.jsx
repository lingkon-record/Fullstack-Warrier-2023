
import React, { useState } from 'react';

const TaxCalculator = () => {
    const [income, setIncome] = useState('');
        const [taxAmount, setTaxAmount] = useState(0);
            const [remainingIncome, setRemainingIncome] = useState(0);
                const [errorMessage, setErrorMessage] = useState('');
    const calculateTax = () => {
            const parsedIncome = parseFloat(income);
                    if (!isNaN(parsedIncome)) {
                                const calculatedTaxAmount = parsedIncome * 0.1;
                                            const calculatedRemainingIncome = parsedIncome - calculatedTaxAmount;
                                                        setTaxAmount(calculatedTaxAmount.toFixed(2));
                                                                    setRemainingIncome(calculatedRemainingIncome.toFixed(2));
                                                                                setErrorMessage('');
                                                                                        } else {
                                                                                                    setTaxAmount(0);
                                                                                                                setRemainingIncome(0);
                                                                                                                            setErrorMessage('Please enter a valid income amount.');
                                                                                                                                    }
                                                                                                                                        };
    return (
            <div className="flex justify-center items-center h-screen">
                        <div className="text-center">
                                        <h2 className="text-2xl font-bold mb-4">Income Tax Calculator</h2>
                                                        <label htmlFor="income">Enter your income:</label>
                                                                        <input
                                                                                            type="number"
                                                                                                                id="income"
                                                                                                                                    value={income}
                                                                                                                                                        onChange={(e) => setIncome(e.target.value)}
                                                                                                                                                                            className="p-2 m-2 border border-gray-300 rounded"
                                                                                                                                                                                            />
                                                                                                                                                                                                            <button onClick={calculateTax} className="p-2 m-2 border border-gray-300 rounded bg-blue-500 text-white hover:bg-blue-600">Calculate Tax</button>
                                                                                                                                                                                                                            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                                                                                                                                                                                                                                            <div id="result" className="mt-4">
                                                                                                                                                                                                                                                                <p>Tax Amount: ${taxAmount}</p>
                                                                                                                                                                                                                                                                                    <p>Remaining Income: ${remainingIncome}</p>
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                            };
export default TaxCalculator;
