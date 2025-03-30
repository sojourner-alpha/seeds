import { Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaFlask } from 'react-icons/fa';

const HomePage = () => {
  // Mock featured seeds data
  const featuredSeeds = [
    // Bulk Seeds
    {
      id: 1,
      name: 'Poontang X (Open Pollination)',
      image: '/images/strains/poontang-x-op.jpg',
      price: 20,
      bulkPrice: 80,
      category: 'Hybrid',
      thc: '24-28%',
      availability: 'BULK'
    },
    {
      id: 11,
      name: 'Wilson Zero X (Open Pollination)',
      image: '/images/strains/wilson-zero-x-op.jpg',
      price: 20,
      bulkPrice: 80,
      category: 'Hybrid',
      thc: '26-30%',
      availability: 'BULK'
    },
    {
      id: 19,
      name: 'Trop Cherry X (Open Pollination)',
      image: '/images/strains/trop-cherry-x-op.jpg',
      price: 20,
      bulkPrice: 80,
      category: 'Hybrid',
      thc: '24-28%',
      availability: 'BULK'
    },
    // Limited Edition Seeds
    {
      id: 15,
      name: 'Resting Bitch Face X (Open Pollination)',
      image: '/images/strains/rbf-x-op.jpg',
      price: 30,
      category: 'Indica',
      thc: '24-28%',
      availability: 'LIMITED'
    },
    {
      id: 20,
      name: 'Trop Cherry X (Space Gello x Zuchi)',
      image: '/images/strains/trop-cherry-x-space-gello-zuchi.jpg',
      price: 30,
      category: 'Hybrid',
      thc: '25-29%',
      availability: 'LIMITED'
    },
    {
      id: 6,
      name: 'Poontang X (Space Gello x Zuchi)',
      image: '/images/strains/poontang-x-space-gello-zuchi.jpg',
      price: 30,
      category: 'Hybrid',
      thc: '26-30%',
      availability: 'LIMITED'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80"></div>
        <div className="container mx-auto px-4 py-12 lg:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Colorado Cannabis Seeds Collection
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6">
              Discover our hand-selected cannabis seeds for your collection. 
              Premium genetics with exceptional quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                to="/seeds" 
                className="px-6 py-3 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors text-center"
              >
                Shop Seeds
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Seeds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {featuredSeeds.map((seed) => (
              <div key={seed.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 sm:h-64 bg-gray-200">
                  {/* Placeholder for seed image */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    <FaSeedling size={48} />
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{seed.name}</h3>
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                      seed.availability === 'BULK' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {seed.availability}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">THC: {seed.thc}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      {seed.availability === 'BULK' ? (
                        <>
                          <span className="text-lg font-bold">From ${seed.price}</span>
                          <span className="text-sm text-gray-600">Bulk: ${seed.bulkPrice}/50 seeds</span>
                        </>
                      ) : (
                        <span className="text-lg font-bold">${seed.price}</span>
                      )}
                    </div>
                    <Link
                      to={`/seeds/${seed.name.toLowerCase()
                        .replace(/\s+x\s+/g, '-x-')
                        .replace(/[()]/g, '')
                        .replace(/\s+/g, '-')
                        .replace(/--/g, '-')}`}
                      className="text-amber-500 hover:text-amber-600 font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/seeds"
              className="px-6 py-3 bg-green-800 text-white font-medium rounded-lg hover:bg-green-900 transition-colors"
            >
              View All Seeds
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Colorado Cannabis Seeds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 text-green-800 rounded-full mb-4">
                <FaSeedling size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Genetics</h3>
              <p className="text-gray-600">Our seeds are sourced from award-winning breeders with proven genetics.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 text-green-800 rounded-full mb-4">
                <FaLeaf size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Selection</h3>
              <p className="text-gray-600">We offer a wide range of varieties for all preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 text-green-800 rounded-full mb-4">
                <FaFlask size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lab Tested</h3>
              <p className="text-gray-600">Our seeds are laboratory tested for quality, viability, and consistency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 