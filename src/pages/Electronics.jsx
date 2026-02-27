import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Electronics = () => {
  const electronicsItems = [
    // Smartphones & Tablets
    { name: 'Smartphones', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=300', category: 'Mobile' },
    { name: 'iPhone', image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&q=80&w=300', category: 'Mobile' },
    { name: 'Samsung', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=300', category: 'Mobile' },
    { name: 'iPad', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300', category: 'Tablet' },
    { name: 'Tablets', image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&q=80&w=300', category: 'Tablet' },
    
    // Computers & Laptops
    { name: 'Laptops', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=300', category: 'Computer' },
    { name: 'MacBook', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300', category: 'Computer' },
    { name: 'Desktops', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=300', category: 'Computer' },
    
    // Cameras & Security
    { name: 'Cameras', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=300', category: 'Photography' },
    { name: 'CCTV', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&q=80&w=300', category: 'Security' },
    
    // Home Appliances
    { name: 'Smart TV', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=300', category: 'Home' },
    { name: 'Fridge', image: 'https://images.unsplash.com/photo-1584568694244-5fb8c56c4b21?auto=format&fit=crop&q=80&w=300', category: 'Home' },
    
    // Accessories
    { name: 'Accessories', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=300', category: 'Accessories' },
    { name: 'Headphones', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300', category: 'Accessories' },
    { name: 'Smart Watch', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300', category: 'Accessories' },
  ];

  // Group items by category for better organization
  const categories = [...new Set(electronicsItems.map(item => item.category))];

  return (
    <div className="min-h-screen bg-primary">
      {/* Header */}
      <div className="bg-primary-dark border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-accent hover:text-accent/80 transition"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </Link>
            <h1 className="text-3xl font-display font-bold text-accent">
              Electronics
            </h1>
          </div>
          <p className="text-gray-400 mt-2">
            
          </p>
        </div>
      </div>

      {/* Categories and Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.map((category) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-display font-bold text-accent mb-6 border-b border-gray-800 pb-2">
              {category}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {electronicsItems
                .filter(item => item.category === category)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-primary-light rounded-xl overflow-hidden hover:shadow-xl transition group cursor-pointer border border-gray-800 hover:border-accent/50"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-accent mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        High quality {item.name.toLowerCase()} available
                      </p>
                      <div className="mt-3 flex justify-between items-center">
                        <span className="text-xs text-gray-500">Click for details</span>
                        <button className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/20 transition">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;