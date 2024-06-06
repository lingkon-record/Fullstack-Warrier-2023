// App.js
import React, { useState, useEffect } from 'react';

const initialAccounts = [
  { name: 'Lingkon', accountNumber: '5821458451', balance: 1000 },
  { name: 'Noman', accountNumber: '10542284102', balance: 2000 },
  { name: 'Roki', accountNumber: '854215421', balance: 3000 },
  { name: 'Riya', accountNumber: '6982145474', balance: 4000 },
];

const App = () => {
  const [accounts, setAccounts] = useState(initialAccounts);
  const [accountHolder, setAccountHolder] = useState('');
  const [accountHolderDetails, setAccountHolderDetails] = useState(null);
  const [cashReceiver, setCashReceiver] = useState('');
  const [cashReceiverDetails, setCashReceiverDetails] = useState(null);
  const [transactionAmount, setTransactionAmount] = useState('');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const holderDetails = accounts.find(account => account.name === accountHolder);
    setAccountHolderDetails(holderDetails);
  }, [accountHolder, accounts]);

  useEffect(() => {
    const receiverDetails = accounts.find(account => account.name === cashReceiver);
    setCashReceiverDetails(receiverDetails);
  }, [cashReceiver, accounts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accountHolder && cashReceiver && transactionAmount && accountHolder !== cashReceiver) {
      const holderAccount = accounts.find(account => account.name === accountHolder);
      const receiverAccount = accounts.find(account => account.name === cashReceiver);

      if (holderAccount.balance >= parseFloat(transactionAmount)) {
        const transactionId = Math.floor(Math.random() * 10000000000);
        const todayDate = new Date().toISOString().slice(0, 10);

        const newHolderAccount = {
          ...holderAccount,
          balance: holderAccount.balance - parseFloat(transactionAmount),
        };

        const newReceiverAccount = {
          ...receiverAccount,
          balance: receiverAccount.balance + parseFloat(transactionAmount),
        };

        const newAccounts = accounts.map(account =>
          account.name === accountHolder
            ? newHolderAccount
            : account.name === cashReceiver
            ? newReceiverAccount
            : account
        );

        setAccounts(newAccounts);

        const newHistoryItem = {
          transactionId,
          date: todayDate,
          accountHolder: accountHolder,
          cashReceiver: cashReceiver,
          transactionAmount,
        };

        setHistory([...history, newHistoryItem]);
        setTransactionAmount('');
        setErrorMessage('');
      } else {
        setErrorMessage('Insufficient funds in the account holder\'s account.');
      }
    } else {
      setErrorMessage('Please fill in all fields correctly.');
    }
  };

  const toggleHistory = () => {
    const password = prompt('Enter a 4-digit password:');
    if (password === '1234') {
      setShowHistory(!showHistory);
      setErrorMessage('');
    } else {
      setErrorMessage('Wrong password');
    }
  };

  const clearHistory = () => {
    const password = prompt('Enter a 4-digit password:');
    if (password === '1234') {
      setHistory([]);
      setErrorMessage('');
    } else {
      setErrorMessage('Wrong password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-center">Account Status</h2>
          <p>Account Holder: {accountHolderDetails ? `${accountHolderDetails.name} - Balance: $${accountHolderDetails.balance}` : 'Select an Account Holder'}</p>
          <p>Cash Receiver: {cashReceiverDetails ? `${cashReceiverDetails.name} - Balance: $${cashReceiverDetails.balance}` : 'Select a Cash Receiver'}</p>
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label htmlFor="accountHolder" className="block text-sm font-medium text-gray-700">
              Account Holder
            </label>
            <select
              id="accountHolder"
              value={accountHolder}
              onChange={(e) => setAccountHolder(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            >
              <option value="">Select Account Holder</option>
              {accounts.map((account) => (
                <option key={account.accountNumber} value={account.name}>
                  {account.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="accountHolderAccountNumber" className="block text-sm font-medium text-gray-700">
              Account Holder Account Number
            </label>
            <input
              type="text"
              id="accountHolderAccountNumber"
              value={accountHolderDetails ? accountHolderDetails.accountNumber : ''}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cashReceiver" className="block text-sm font-medium text-gray-700">
              Cash Receiver
            </label>
            <select
              id="cashReceiver"
              value={cashReceiver}
              onChange={(e) => setCashReceiver(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            >
              <option value="">Select Cash Receiver</option>
              {accounts.map((account) => (
                <option key={account.accountNumber} value={account.name}>
                  {account.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="cashReceiverAccountNumber" className="block text-sm font-medium text-gray-700">
              Cash Receiver Account Number
            </label>
            <input
              type="text"
              id="cashReceiverAccountNumber"
              value={cashReceiverDetails ? cashReceiverDetails.accountNumber : ''}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label htmlFor="transactionAmount" className="block text-sm font-medium text-gray-700">
              Transaction Amount
            </label>
            <input
              type="number"
              id="transactionAmount"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded shadow-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
          >
            Submit
          </button>
        </form>

        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

        <button
          onClick={toggleHistory}
          className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600 mb-4"
        >
          {showHistory ? 'Hide History' : 'Show History'}
        </button>

        <button
          onClick={clearHistory}
          className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 mb-4"
        >
          Clear History
        </button>

        {showHistory && (
          <div className="bg-gray-50 p-4 rounded shadow-inner">
            <h2 className="text-lg font-semibold mb-2">History</h2>
            {history.length > 0 ? (
              <ul>
                {history.map((item, index) => (
                  <li key={index} className="border-b py-1">
                    <p>Transaction ID: {item.transactionId}</p>
                    <p>Date: {item.date}</p>
                    <p>From: {item.accountHolder} (Account: {accounts.find(account => account.name === item.accountHolder).accountNumber})</p>
                    <p>To: {item.cashReceiver} (Account: {accounts.find(account => account.name === item.cashReceiver).accountNumber})</p>
                    <p>Amount: ${item.transactionAmount}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No history yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
