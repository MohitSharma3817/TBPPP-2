import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="bg-slate-300 shadow-md sticky top-0 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-200 cursor-pointer">
              CryptoPulse
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            {location.pathname !== "/" && (
              <Link to="/" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-800 transition">
                Dashboard
              </Link>
            )}
            <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 transition">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;