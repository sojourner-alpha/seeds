import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaFilter } from 'react-icons/fa';

const SeedsPage = () => {
  // Mock seed categories
  const categories = ['All', 'Indica', 'Sativa', 'Hybrid', 'CBD', 'Autoflower'];
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Mock seeds data
  const seeds = [
    {
      id: 1,
      name: 'Northern Lights',
      image: '/seeds/northern-lights.jpg',
      price: 49.99,
      category: 'Indica',
      thc: '18-20%',
      seedCount: 10,
    },
    {
      id: 2,
      name: 'Blue Dream',
      image: '/seeds/blue-dream.jpg',
      price: 59.99,
      category: 'Hybrid',
      thc: '17-24%',
      seedCount: 5,
    },
    {
      id: 3,
      name: 'Sour Diesel',
      image: '/seeds/sour-diesel.jpg',
      price: 54.99,
      category: 'Sativa',
      thc: '19-25%',
      seedCount: 10,
    },
    {
      id: 4,
      name: 'Girl Scout Cookies',
      image: '/seeds/gsc.jpg',
      price: 64.99,
      category: 'Hybrid',
      thc: '25-28%',
      seedCount: 5,
    },
    {
      id: 5,
      name: 'OG Kush',
      image: '/seeds/og-kush.jpg',
      price: 59.99,
      category: 'Hybrid',
      thc: '20-25%',
      seedCount: 10,
    },
    {
      id: 6,
      name: 'CBD Critical',
      image: '/seeds/cbd-critical.jpg',
      price: 49.99,
      category: 'CBD',
      thc: '5-7%',
      cbd: '15-18%',
      seedCount: 5,
    },
    {
      id: 7,
      name: 'White Widow',
      image: '/seeds/white-widow.jpg',
      price: 44.99,
      category: 'Hybrid',
      thc: '19-22%',
      seedCount: 10,
    },
    {
      id: 8,
      name: 'Durban Poison',
      image: '/seeds/durban-poison.jpg',
      price: 54.99,
      category: 'Sativa',
      thc: '20-25%',
      seedCount: 5,
    },
    {
      id: 9,
      name: 'Purple Punch Auto',
      image: '/seeds/purple-punch.jpg',
      price: 64.99,
      category: 'Autoflower',
      thc: '18-20%',
      seedCount: 3,
    },
  ];

  // Filter seeds based on active category
  const filteredSeeds = activeCategory === 'All' 
    ? seeds 
    : seeds.filter(seed => seed.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cannabis Seeds Collection</h1>
        <p className="text-gray-600">Browse our premium selection of cannabis seeds for collectors.</p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        <span className="flex items-center text-gray-700 mr-2">
          <FaFilter className="mr-2" /> Filter:
        </span>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-green-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Seeds Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSeeds.map(seed => (
          <div key={seed.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              {/* Placeholder for seed image */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                <FaSeedling size={36} />
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{seed.name}</h3>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {seed.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">THC: {seed.thc}</p>
              <p className="text-gray-600 text-sm mb-2">{seed.seedCount} seeds per pack</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">${seed.price}</span>
                <Link
                  to={`/seeds/${seed.id}`}
                  className="text-amber-500 hover:text-amber-600 font-medium text-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredSeeds.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-600">No seeds found in this category</h3>
          <button 
            onClick={() => setActiveCategory('All')} 
            className="mt-4 px-4 py-2 bg-green-800 text-white rounded"
          >
            Show All Seeds
          </button>
        </div>
      )}
    </div>
  );
};

export default SeedsPage; 