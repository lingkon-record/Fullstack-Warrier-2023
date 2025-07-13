import { useState } from "react";

// Balance Data
const walletData = {
  USD: {
    name: "US Dollar",
    icon: "💵",
    balance: 1200.5,
    dailyChange: 2.3,
    converted: "BDT 140,600",
  },
  BDT: {
    name: "Bangladeshi Taka",
    icon: "🪙",
    balance: 140000,
    dailyChange: -1.1,
    converted: "USD 1,200.50",
  },
  EUR: {
    name: "Euro",
    icon: "💶",
    balance: 875.4,
    dailyChange: 0.5,
    converted: "BDT 104,320",
  },
};

export default function OnePageApp() {
  const [active, setActive] = useState("USD");
  const wallet = walletData[active];

  return (
    <div className="font-sans bg-gray-50 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">WalletZone</h1>
          <ul className="flex gap-6 font-medium">
            <li><a href="#home" className="hover:text-blue-600">Home</a></li>
            <li><a href="#features" className="hover:text-blue-600">Features</a></li>
            <li><a href="#balance" className="hover:text-blue-600">Balance</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-blue-100 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4 text-blue-800">
            All Your Wallets, One View
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Track your USD, BDT, and EUR balances in real-time with daily trends.
          </p>
          <a
            href="#balance"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Check My Balance
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Multi-Currency</h3>
            <p className="text-gray-600 text-sm">Track balances in USD, BDT, EUR & more.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Live Conversion</h3>
            <p className="text-gray-600 text-sm">Automatic exchange rate conversion shown.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl shadow text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Secure & Fast</h3>
            <p className="text-gray-600 text-sm">Built with modern encryption and privacy-first UI.</p>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section id="balance" className="py-20 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Wallet Balance</h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {Object.keys(walletData).map((currency) => (
              <button
                key={currency}
                onClick={() => setActive(currency)}
                className={`px-5 py-2 rounded-lg font-medium border transition-all duration-300 ${
                  active === currency
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                }`}
              >
                {currency}
              </button>
            ))}
          </div>

          {/* Wallet Card */}
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition">
            <div className="flex justify-center items-center gap-3 mb-4">
              <span className="text-3xl">{wallet.icon}</span>
              <h2 className="text-2xl font-semibold text-gray-800">{wallet.name}</h2>
            </div>

            <p className="text-sm text-gray-500 mb-1">Available Balance</p>
            <p className="text-5xl font-extrabold text-green-600 mb-4">
              {wallet.balance.toLocaleString()} {active}
            </p>

            <div className="mt-4 text-sm text-gray-700">
              <p>
                <strong>Converted:</strong> {wallet.converted}
              </p>
            </div>

            <p
              className={`mt-3 text-sm font-medium ${
                wallet.dailyChange >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {wallet.dailyChange >= 0 ? "▲" : "▼"} {Math.abs(wallet.dailyChange)}% today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-12 bg-blue-900 text-white text-center">
        <h3 className="text-xl font-semibold mb-2">WalletZone</h3>
        <p className="text-sm text-blue-100">Powered by React + Tailwind | All rights reserved © 2025</p>
      </footer>
    </div>
  );
}
