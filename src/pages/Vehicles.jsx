import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const Vehicles = () => {
  const vehicleItems = [
    // SUVs
    { 
      name: 'Toyota Land Cruiser', 
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=300', 
      category: 'SUV',
      description: 'Luxury off-road SUV, perfect for any terrain',
      price: 'From $85,000'
    },
    { 
      name: 'Range Rover', 
      image: 'https://images.unsplash.com/photo-1606664514172-0135b4b8d6c1?auto=format&fit=crop&q=80&w=300', 
      category: 'SUV',
      description: 'Premium British luxury SUV',
      price: 'From $92,000'
    },
    { 
      name: 'BMW X5', 
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=300', 
      category: 'SUV',
      description: 'Sporty performance meets luxury',
      price: 'From $65,000'
    },
    { 
      name: 'Mercedes GLE', 
      image: 'https://images.unsplash.com/photo-1606220588913-b3e00b18a1b4?auto=format&fit=crop&q=80&w=300', 
      category: 'SUV',
      description: 'German engineering at its finest',
      price: 'From $70,000'
    },
    { 
      name: 'Honda CR-V', 
      image: 'https://images.unsplash.com/photo-1568844293986-8d0400b1d6c4?auto=format&fit=crop&q=80&w=300', 
      category: 'SUV',
      description: 'Reliable family SUV',
      price: 'From $32,000'
    },

    // Sedans
    { 
      name: 'Toyota Camry', 
      image: 'https://images.unsplash.com/photo-1621007947382-49b46ee1d7d7?auto=format&fit=crop&q=80&w=300', 
      category: 'Sedan',
      description: 'Best-selling midsize sedan',
      price: 'From $28,000'
    },
    { 
      name: 'Honda Accord', 
      image: 'https://images.unsplash.com/photo-1618842676085-c48d1567b8c6?auto=format&fit=crop&q=80&w=300', 
      category: 'Sedan',
      description: 'Sporty and reliable sedan',
      price: 'From $27,000'
    },
    { 
      name: 'BMW 3 Series', 
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=300', 
      category: 'Sedan',
      description: 'Ultimate driving machine',
      price: 'From $42,000'
    },
    { 
      name: 'Mercedes C-Class', 
      image: 'https://images.unsplash.com/photo-1606220588913-b3e00b18a1b4?auto=format&fit=crop&q=80&w=300', 
      category: 'Sedan',
      description: 'Luxury compact executive sedan',
      price: 'From $45,000'
    },
    { 
      name: 'Tesla Model 3', 
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=300', 
      category: 'Sedan',
      description: 'Electric performance sedan',
      price: 'From $40,000'
    },

    // 3-Seated Keke (Tricycles)
    { 
      name: 'Bajaj RE Auto', 
      image: 'https://images.unsplash.com/photo-1600712242805-aa9b56c6b1d4?auto=format&fit=crop&q=80&w=300', 
      category: 'Keke',
      description: 'Popular 3-seater auto rickshaw',
      price: 'From $5,000'
    },
    { 
      name: 'TVS King', 
      image: 'https://images.unsplash.com/photo-1600712242805-aa9b56c6b1d4?auto=format&fit=crop&q=80&w=300', 
      category: 'Keke',
      description: 'Durable passenger auto rickshaw',
      price: 'From $4,800'
    },
    { 
      name: 'Mahindra Alfa', 
      image: 'https://images.unsplash.com/photo-1600712242805-aa9b56c6b1d4?auto=format&fit=crop&q=80&w=300', 
      category: 'Keke',
      description: 'Modern 3-wheeler for passengers',
      price: 'From $5,200'
    },
    { 
      name: 'Piaggio Ape', 
      image: 'https://images.unsplash.com/photo-1600712242805-aa9b56c6b1d4?auto=format&fit=crop&q=80&w=300', 
      category: 'Keke',
      description: 'Italian-designed 3-wheeler',
      price: 'From $5,500'
    },

    // 10-Tire Trucks (Heavy Duty)
    { 
      name: 'Volvo FH16', 
      image: 'https://images.unsplash.com/photo-1588872657578-7c7a9e1c9b8a?auto=format&fit=crop&q=80&w=300', 
      category: 'Truck',
      description: 'Heavy-duty 10-tire truck for long haul',
      price: 'From $150,000'
    },
    { 
      name: 'Scania R Series', 
      image: 'https://images.unsplash.com/photo-1588872657578-7c7a9e1c9b8a?auto=format&fit=crop&q=80&w=300', 
      category: 'Truck',
      description: 'Powerful 10-tire truck for heavy loads',
      price: 'From $145,000'
    },
    { 
      name: 'Mercedes Actros', 
      image: 'https://images.unsplash.com/photo-1588872657578-7c7a9e1c9b8a?auto=format&fit=crop&q=80&w=300', 
      category: 'Truck',
      description: 'German engineering heavy truck',
      price: 'From $140,000'
    },
    { 
      name: 'MAN TGX', 
      image: 'https://images.unsplash.com/photo-1588872657578-7c7a9e1c9b8a?auto=format&fit=crop&q=80&w=300', 
      category: 'Truck',
      description: 'Efficient 10-tire long-haul truck',
      price: 'From $138,000'
    },
    { 
      name: 'DAF XF', 
      image: 'https://images.unsplash.com/photo-1588872657578-7c7a9e1c9b8a?auto=format&fit=crop&q=80&w=300', 
      category: 'Truck',
      description: 'Aerodynamic 10-tire truck',
      price: 'From $135,000'
    },
  ];

  // Group items by category
  const categories = [
    { id: 'SUV', name: 'SUVs', icon: '🚙' },
    { id: 'Sedan', name: 'Sedans', icon: '🚗' },
    { id: 'Keke', name: '3-Seated Keke', icon: '🛺' },
    { id: 'Truck', name: '10-Tire Trucks', icon: '🚛' },
  ];

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
              Vehicles
            </h1>
          </div>
          <p className="text-gray-400 mt-2">
            Browse our extensive collection of vehicles from around the world
          </p>
        </div>
      </div>

      {/* Categories and Items */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {categories.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-2xl font-display font-bold text-accent mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
              <span>{category.icon}</span> {category.name}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {vehicleItems
                .filter(item => item.category === category.id)
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
                      <p className="text-sm text-gray-400 mb-2">
                        {item.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-accent font-bold">
                          {item.price}
                        </span>
                        <button className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm hover:bg-accent/20 transition">
                          Inquire
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

export default Vehicles;