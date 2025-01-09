import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-indigo-600">
              PrepePundit
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              to="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Profile
            </Link>
            <Link
              to="/mock-tests"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Mock Tests
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;