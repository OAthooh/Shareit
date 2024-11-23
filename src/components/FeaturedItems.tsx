import React from 'react';
import { MapPin } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Vintage Desk Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    location: 'Brooklyn, NY',
    distance: '0.8 miles away',
  },
  {
    id: 2,
    title: 'Wooden Bookshelf',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80',
    location: 'Manhattan, NY',
    distance: '1.2 miles away',
  },
  {
    id: 3,
    title: 'Coffee Table',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80',
    location: 'Queens, NY',
    distance: '2.5 miles away',
  },
  {
    id: 4,
    title: 'Plant Collection',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    location: 'Bronx, NY',
    distance: '3.1 miles away',
  },
];

export default function FeaturedItems() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{item.distance}</span>
                </div>
                <button className="mt-4 w-full py-2 px-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  Request Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}