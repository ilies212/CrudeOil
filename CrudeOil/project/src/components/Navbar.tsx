import React, { useState } from 'react';
import { Menu, X, Search, Ship } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Ship className="h-8 w-8 text-blue-900 animate-float" />
              <span className="text-2xl font-bold text-blue-900 ml-2">Beaconsfield</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
            <a href="#home" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Services</a>
            <a href="#articles" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Articles</a>
            <a href="#about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">Contact</a>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-colors duration-300">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <form onSubmit={handleSearch} className="relative p-2">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-5 top-4.5 h-5 w-5 text-gray-400" />
            </form>
            <a href="#home" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium">Home</a>
            <a href="#services" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium">Services</a>
            <a href="#articles" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium">Articles</a>
            <a href="#about" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-900 px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;