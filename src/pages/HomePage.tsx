import { Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaFlask } from 'react-icons/fa';

const HomePage = () => {
  // Mock featured seeds data
  const featuredSeeds = [
    {
      id: 1,
      name: 'Poontang Pie',
      image: '/seeds/poontang-pie.jpg',
      price: 99.99,
      category: 'Hybrid',
      thc: '28-32%',
    },
    {
      id: 2,
      name: 'Resting Bitch Face',
      image: '/seeds/resting-bitch-face.jpg',
      price: 89.99,
      category: 'Indica',
      thc: '25-29%',
    },
    {
      id: 3,
      name: 'Wilson Zero',
      image: '/seeds/wilson-zero.jpg',
      price: 94.99,
      category: 'Hybrid',
      thc: '26-30%',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Premium Cannabis Seeds Collection
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Discover our hand-selected cannabis seeds for your collection. 
              Premium genetics with exceptional quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSeeds.map((seed) => (
              <div key={seed.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200">
                  {/* Placeholder for seed image */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                    <FaSeedling size={48} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{seed.name}</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {seed.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">THC: {seed.thc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">${seed.price}</span>
                    <Link
                      to={`/seeds/${seed.name.toLowerCase().replace(/\s+/g, '-')}`}
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
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ElmSeeds</h2>
          
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
              <p className="text-gray-600">We offer a wide range of indica, sativa, and hybrid varieties for all preferences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 bg-green-100 text-green-800 rounded-full mb-4">
                <FaFlask size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lab Tested</h3>
              <p className="text-gray-600">All our seeds are laboratory tested for quality, viability, and consistency.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 