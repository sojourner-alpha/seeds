import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaFilter } from 'react-icons/fa';

const SeedsPage = () => {
  // Mock seed categories
  const categories = ['All', 'Indica', 'Sativa', 'Hybrid', 'Limited Edition', 'Bulk'];
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Mock seeds data
  const seeds = [
    // Poontang X variants
    {
      id: 1,
      name: 'Poontang X (Open Pollination)',
      image: '/images/strains/poontang-x-op.jpg',
      price: 20,
      bulkPrice: 80,
      category: 'Hybrid',
      seedCount: 10,
      bulkSeedCount: 50,
      availability: 'BULK'
    },
    {
      id: 2,
      name: 'Poontang X (Peach Goblin)',
      image: '/images/strains/poontang-x-peach-goblin.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 3,
      name: 'Poontang X (Fruit of Eden)',
      image: '/images/strains/poontang-x-fruit-of-eden.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 4,
      name: 'Poontang X (Peach Smash)',
      image: '/images/strains/poontang-x-peach-smash.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 5,
      name: 'Poontang X (Blueberry)',
      image: '/images/strains/poontang-x-blueberry.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 6,
      name: 'Poontang X (Space Gello x Zuchi)',
      image: '/images/strains/poontang-x-space-gello-zuchi.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 7,
      name: 'Poontang X (Fizzle Rocks x Candy Jam)',
      image: '/images/strains/poontang-x-fizzle-rocks-candy-jam.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 8,
      name: 'Poontang X (Huckleberry x Mellonheads)',
      image: '/images/strains/poontang-x-huckleberry-mellonheads.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },

    // Chimera X variants
    {
      id: 9,
      name: 'Chimera X (Open Pollination)',
      image: '/images/strains/chimera-x-op.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 10,
      name: 'Chimera X (Space Gello x Zuchi)',
      image: '/images/strains/chimera-x-space-gello-zuchi.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },

    // Wilson Zero X variants
    {
      id: 11,
      name: 'Wilson Zero X (Open Pollination)',
      image: '/images/strains/wilson-zero-x-op.jpg',
      price: 20,
      bulkPrice: 80,
      category: 'Hybrid',
      seedCount: 10,
      bulkSeedCount: 50,
      availability: 'BULK'
    },
    {
      id: 12,
      name: 'Wilson Zero X (Peach Goblin)',
      image: '/images/strains/wilson-zero-x-peach-goblin.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 13,
      name: 'Wilson Zero X (Huckleberry x Mellonheads)',
      image: '/images/strains/wilson-zero-x-huckleberry-mellonheads.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 14,
      name: 'Wilson Zero X (Peach Smash)',
      image: '/images/strains/wilson-zero-x-peach-smash.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },

    // Resting Bitch Face X variants
    {
      id: 15,
      name: 'Resting Bitch Face X (Open Pollination)',
      image: '/images/strains/rbf-x-op.jpg',
      price: 20,
      category: 'Indica',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 16,
      name: 'Resting Bitch Face X (Blueberry)',
      image: '/images/strains/rbf-x-blueberry.jpg',
      price: 20,
      category: 'Indica',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 17,
      name: 'Resting Bitch Face X (Peach Goblin)',
      image: '/images/strains/rbf-x-peach-goblin.jpg',
      price: 20,
      category: 'Indica',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 18,
      name: 'Resting Bitch Face X (Fizzle Rocks x Candy Jam)',
      image: '/images/strains/rbf-x-fizzle-rocks-candy-jam.jpg',
      price: 20,
      category: 'Indica',
      seedCount: 10,
      availability: 'LIMITED'
    },

    // Trop Cherry X variants
    {
      id: 19,
      name: 'Trop Cherry X (Open Pollination)',
      image: '/images/strains/trop-cherry-x-op.jpg',
      price: 20,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'BULK'
    },
    {
      id: 20,
      name: 'Trop Cherry X (Space Gello x Zuchi)',
      image: '/images/strains/trop-cherry-x-space-gello-zuchi.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 21,
      name: 'Trop Cherry X (Peach Goblin)',
      image: '/images/strains/trop-cherry-x-peach-goblin.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 22,
      name: 'Trop Cherry X (Huckleberry x Mellonheads)',
      image: '/images/strains/trop-cherry-x-huckleberry-mellonheads.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
    {
      id: 23,
      name: 'Trop Cherry X (Blueberry)',
      image: '/images/strains/trop-cherry-x-blueberry.jpg',
      price: 30,
      category: 'Hybrid',
      seedCount: 10,
      availability: 'LIMITED'
    },
  ];

  // Filter seeds based on active category
  const filteredSeeds = activeCategory === 'All' 
    ? seeds 
    : activeCategory === 'Bulk'
    ? seeds.filter(seed => seed.availability === 'BULK')
    : activeCategory === 'Limited Edition'
    ? seeds.filter(seed => seed.availability === 'LIMITED')
    : seeds.filter(seed => seed.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Cannabis Seeds Collection</h1>
        <p className="text-gray-600">Browse our premium selection of cannabis seeds for collectors.</p>
      </div>

      {/* Make filters scrollable on mobile */}
      <div className="mb-6 sm:mb-8 overflow-x-auto pb-2">
        <div className="flex flex-nowrap items-center gap-2 min-w-min">
          <span className="flex-shrink-0 flex items-center text-gray-700 mr-2">
            <FaFilter className="mr-2" /> Filter:
          </span>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === category
                  ? 'bg-green-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Seeds Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                  seed.availability === 'BULK' 
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {seed.availability}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{seed.seedCount} seeds per pack</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">
                  {seed.availability === 'BULK' 
                    ? `$${seed.price}/${seed.seedCount} seeds or $${seed.bulkPrice}/${seed.bulkSeedCount} seeds`
                    : `$${seed.price}/${seed.seedCount} seeds`
                  }
                </span>
                <Link
                  to={`/seeds/${seed.name.toLowerCase().replace(/[()]/g, '').replace(/\s+/g, '-')}`}
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