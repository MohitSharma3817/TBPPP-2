import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer">
              CryptoPulse
            </span>
          </div>
          <div className="flex-1 max-w-lg mx-6">
            <div className="relative">
              <input
                type="text"
                className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg 
                           bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 
                           focus:border-blue-500 text-sm placeholder-gray-400"
                placeholder="Search coin"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
