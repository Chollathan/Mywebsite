import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">3แมวจำกัด</a>
        </div>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-gray-200">Home</a>
          </li>
          <li>
            <a href="/service" className="hover:text-gray-200">Service</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-200">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
