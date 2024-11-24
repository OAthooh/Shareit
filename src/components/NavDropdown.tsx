import React, { useState, useRef } from 'react';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface CategoryItem {
  name: string;
  badge?: string;
}

interface NavDropdownProps {
  items: {
    icon: LucideIcon;
    label: string;
    description: string;
    categories?: CategoryItem[];
  }[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function NavDropdown({ items, onMouseEnter, onMouseLeave }: NavDropdownProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryTimeoutRef = useRef<NodeJS.Timeout>();

  const handleCategoryEnter = (label: string) => {
    if (categoryTimeoutRef.current) {
      clearTimeout(categoryTimeoutRef.current);
    }
    setActiveCategory(label);
  };

  const handleCategoryLeave = () => {
    categoryTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 300);
  };

  return (
    <div
      className="absolute left-0 w-64 mt-2 bg-white rounded-xl shadow-lg py-2 ring-1 ring-black ring-opacity-5 transition-opacity duration-300"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="relative"
          onMouseEnter={() => handleCategoryEnter(item.label)}
          onMouseLeave={handleCategoryLeave}
        >
          <a
            href={`#${item.label.toLowerCase().replace(' ', '-')}`}
            className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex-shrink-0">
              <item.icon className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>
            {item.categories && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
          </a>
          {item.categories && activeCategory === item.label && (
            <div 
              className="absolute left-full top-0 w-56 ml-2 bg-white rounded-xl shadow-lg py-2 ring-1 ring-black ring-opacity-5"
              onMouseEnter={() => handleCategoryEnter(item.label)}
              onMouseLeave={handleCategoryLeave}
            >
              {item.categories.map((category) => (
                <a
                  key={category.name}
                  href={`#${category.name.toLowerCase().replace(' ', '-')}`}
                  className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-sm text-gray-900">{category.name}</span>
                  {category.badge && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                      {category.badge}
                    </span>
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}