"use client"


import React from 'react';

// Dummy Data Object for Personal Finance Stats
const financeData = {
  income: 55000,
  expenses: 15000,
  netWorth: 40000,
  debt: 5000,
  investments: 25000,
  monthlySavings: 3000,
};

const PersonalFinanceDashboard = () => {
  const {
    income,
    expenses,
    netWorth,
    debt,
    investments,
    monthlySavings,
  } = financeData;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 text-white">
      <header className="text-center p-10 font-extrabold text-5xl">
        Personal Finance Dashboard
      </header>

      <main className="p-10 space-y-12">
        {/* Main Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhQRhPsaOoehXygvHimvNjwApbiJz01vJUw&s"
              alt="Income"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-700">Total Income</h3>
            <p className="text-xl">${income}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDAqjd9E1zpdxVA_EoXCMnjYBInQyvM_aPA&s"
              alt="Expenses"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-700 truncate max-w-xs">
  Total Expenses 
</h3>

            <p className="text-xl">${expenses}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <img
              src="https://assets.mailshake.com/wp-content/uploads/2019/10/26112257/04-The-Seven-Stages-of-the-Sales-Cycle.jpg"
              alt="Investments"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-700">Investments</h3>
            <p className="text-xl">${investments}</p>
          </div>
        </div>

        {/* Net Worth & Debt */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Net Worth</h3>
              <p className="text-3xl text-gray-900">${netWorth}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Debt</h3>
              <p className="text-3xl text-gray-900">${debt}</p>
            </div>
          </div>
        </div>

        {/* Monthly Savings */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-700">Monthly Savings</h3>
          <p className="text-3xl text-gray-900">${monthlySavings}</p>
        </div>
      </main>

      <footer className="text-center py-6">
        <p>&copy; 2024 Personal Finance Dashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalFinanceDashboard;





