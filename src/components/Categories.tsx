import React from 'react';
import { Shirt, Home, Book, Laptop, Utensils, Gift } from 'lucide-react';

const categories = [
  { name: 'Clothing', icon: Shirt, items: '2.5k' },
  { name: 'Home', icon: Home, items: '1.8k' },
  { name: 'Books', icon: Book, items: '3.2k' },
  { name: 'Electronics', icon: Laptop, items: '950' },
  { name: 'Kitchen', icon: Utensils, items: '1.4k' },
  { name: 'Others', icon: Gift, items: '2.1k' },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <category.icon className="w-8 h-8 text-emerald-600 mb-3" />
              <span className="font-medium text-gray-900">{category.name}</span>
              <span className="text-sm text-gray-500">{category.items} items</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}