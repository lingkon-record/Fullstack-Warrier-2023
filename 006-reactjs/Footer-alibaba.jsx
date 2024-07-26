import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Get support</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Live chat</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Check order status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Refunds</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Report abuse</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Trade Assurance</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Safe and easy payments</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Money-back policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">On-time shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">After-sales protections</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Product monitoring services</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Source on Alibaba.com</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Request for Quotation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Membership program</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Alibaba.com Logistics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Sales tax and VAT</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Alibaba.com Reads</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Sell on Alibaba.com</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Start selling</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Seller Central</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Become a Verified Supplier</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Partnerships</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Download the app for suppliers</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Get to know us</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-800">About Alibaba.com</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Corporate responsibility</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">News center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
