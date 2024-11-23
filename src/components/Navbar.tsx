import React, { useState } from 'react';
import { Menu, Search, User, Bell, ChevronDown, MapPin, TrendingUp, Grid } from 'lucide-react';
import NavDropdown from './NavDropdown';

const exploreItems = [
  {
    icon: Grid,
    label: 'Categories',
    description: 'Browse all categories',
    categories: [
      { name: 'Food Items' },
      { name: 'Perishables', badge: 'Expiring Soon' },
      { name: 'Electronics' },
      { name: 'Clothing' },
      { name: 'Household Items' },
      { name: 'Books' },
      { name: 'Sports & Outdoors' },
      { name: 'Toys & Games' },
    ],
  },
  {
    icon: MapPin,
    label: 'Nearby Items',
    description: 'Find items in your area',
  },
  {
    icon: TrendingUp,
    label: 'Popular Items',
    description: 'See what\'s trending',
  },
];

export default function Navbar() {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              ShareIt
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-emerald-600 focus:outline-none"
                onMouseEnter={() => setIsExploreOpen(true)}
                onMouseLeave={() => setIsExploreOpen(false)}
              >
                <span>Explore</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {isExploreOpen && (
                <NavDropdown
                  items={exploreItems}
                  onMouseEnter={() => setIsExploreOpen(true)}
                  onMouseLeave={() => setIsExploreOpen(false)}
                />
              )}
            </div>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600">
              How it Works
            </a>
            <a href="#community" className="text-gray-700 hover:text-emerald-600">
              Community
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <User className="w-5 h-5 text-gray-600" />
            </button>
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#explore"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Explore
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              How it Works
            </a>
            <a
              href="#community"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
            >
              Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}