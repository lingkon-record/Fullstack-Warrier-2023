"use client"


import React from 'react';

// Dummy Data Object for Personal Finance Stats
const financeData = {
  income: {
    total: 55000,
    increase: 3000,
    percentage: 5.8,
  },
  expenses: {
    total: 15000,
    increase: 1200,
    percentage: 8.7,
  },
  investments: {
    total: 25000,
    increase: 2000,
    percentage: 8.5,
  },
  transactions: [
    {
      id: 1,
      title: 'Salary Payment',
      amount: 5000,
      type: 'income',
      date: '2024-12-01',
    },
    {
      id: 2,
      title: 'Groceries',
      amount: 300,
      type: 'expense',
      date: '2024-12-05',
    },
    {
      id: 3,
      title: 'Stocks Investment',
      amount: 2000,
      type: 'investment',
      date: '2024-12-10',
    },
  ],
};

const PersonalFinanceDashboard = () => {
  const { income, expenses, investments, transactions } = financeData;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-6 text-center text-4xl font-bold">
        Personal Finance Dashboard
      </header>

      <main className="p-6 space-y-6">
        {/* Financial Overview Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Income */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Income</h3>
              <p className="text-2xl font-bold text-gray-900">${income.total}</p>
              <p className="text-sm text-gray-500">{income.percentage}% increase</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.prod.website-files.com/5b7f24cc900973de13d7beb4/65b0a35d978a57a12b8837b6_Gross%20Sales%201.svg"
                alt="Income"
                className="w-16 h-16 object-cover"
              />
              <p className="text-sm text-green-500">+${income.increase}</p>
            </div>
          </div>

          {/* Expenses */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Expenses</h3>
              <p className="text-2xl font-bold text-gray-900">${expenses.total}</p>
              <p className="text-sm text-gray-500">{expenses.percentage}% increase</p>
            </div>
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSusWcN60dEj952b4lzcN-StYAYmrlWT8eLQ&s"
                alt="Expenses"
                className="w-16 h-16 object-cover"
              />
              <p className="text-sm text-red-500">+${expenses.increase}</p>
            </div>
          </div>

          {/* Investments */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Investments</h3>
              <p className="text-2xl font-bold text-gray-900">${investments.total}</p>
              <p className="text-sm text-gray-500">{investments.percentage}% increase</p>
            </div>
            <div className="text-center">
              <img
                src="https://cdn.prod.website-files.com/5b7f24cc900973de13d7beb4/65b0a35d978a57a12b8837b6_Gross%20Sales%201.svg"
                alt="Investments"
                className="w-16 h-16 object-cover"
              />
              <p className="text-sm text-green-500">+${investments.increase}</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Transactions</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Transaction</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-4 py-2 text-sm text-gray-800">{transaction.title}</td>
                  <td className={`px-4 py-2 text-sm ${transaction.type === 'expense' ? 'text-red-500' : 'text-green-500'}`}>
                    ${transaction.amount}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="bg-green-600 text-white text-center p-4">
        <p>&copy; 2024 Personal Finance Dashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalFinanceDashboard;






