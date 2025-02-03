import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-300 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer">
              CryptoPulse
            </span>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">
              Login
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition">
              Signup
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
