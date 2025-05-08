import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md rounded-2xl m-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* Logo */}
<div className="flex items-center space-x-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-green-600"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 2a8 8 0 100 16 8 8 0 000-16zm.75 10.75c0-.966.784-1.75 1.75-1.75h.5c.966 0 1.75.784 1.75 1.75 0 1.105-.895 2-2 2a2 2 0 01-2-2zm-4.5 0c0-.966.784-1.75 1.75-1.75h.5c.966 0 1.75.784 1.75 1.75 0 1.105-.895 2-2 2a2 2 0 01-2-2z"
      clipRule="evenodd"
    />
  </svg>
  <span className="text-xl font-bold text-green-700">GreenWorld</span>
</div>


          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-900 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navbar Links for larger screens */}
          <div className="hidden sm:flex space-x-4 items-center">
            <Link
              to="/"
              className="px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Home
            </Link>
            <Link
              to="/learn-more"
              className="px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Learn More
            </Link>
            <Link
              to="/eco-tips"
              className="px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Eco Tips
            </Link>
            <Link
              to="/get-involved"
              className="px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
            >
              Get Involved
            </Link>

            {/* Attention-Grabbing Quiz Link */}
            <Link
              to="/quiz"
              className="px-4 py-2 rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 flex items-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M5 12l2 2 4-4"
                />
              </svg>
              <span>Eco Quiz</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-gray-100 space-y-2 px-4 py-2">
          <Link
            to="/"
            className="block text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/learn-more"
            className="block text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Learn More
          </Link>
          <Link
            to="/eco-tips"
            className="block text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Eco Tips
          </Link>
          <Link
            to="/get-involved"
            className="block text-gray-700 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </Link>

          {/* Mobile Quiz Link */}
          <Link
            to="/quiz"
            className="block text-white bg-green-600 py-2 px-4 rounded-xl mt-2 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="flex items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M5 12l2 2 4-4"
                />
              </svg>
              <span>Eco Quiz</span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
