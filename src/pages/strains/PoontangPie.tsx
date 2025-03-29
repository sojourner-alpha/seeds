import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaShoppingCart, FaArrowLeft, FaStar } from 'react-icons/fa';

const PoontangPie = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    alert(`Added ${quantity} pack(s) of Poontang Pie to cart`);
  };

  const seed = {
    id: 1,
    name: 'Poontang Pie',
    image: '/images/strains/poontang-pie.jpg',
    price: 99.99,
    category: 'Hybrid',
    seedCount: 6,
    rating: 4.9,
    reviewCount: 86,
    description: `Poontang Pie is an exceptional hybrid strain known for its incredible potency and complex terpene profile. This strain combines exceptional genetics to create a truly unique cultivar that delivers both in terms of effects and bag appeal.`,
    effects: ['Euphoric', 'Relaxed', 'Creative', 'Uplifted'],
    medicalUses: ['Stress', 'Pain', 'Anxiety', 'Depression'],
    flavorProfile: ['Sweet', 'Earthy', 'Complex'],
    floweringTime: '9-10 weeks',
    yield: 'High',
    height: 'Medium to Tall',
    origin: 'Exotic Genetics',
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <Link to="/seeds" className="flex items-center text-green-800 hover:text-green-600 mb-4 sm:mb-6">
        <FaArrowLeft className="mr-2" /> Back to Seeds
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Seed Image */}
        <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
          <div className="h-64 sm:h-80 lg:h-96 w-full bg-gray-100 rounded flex items-center justify-center">
            <FaSeedling size={96} className="text-gray-300" />
          </div>
        </div>

        {/* Seed Info */}
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0">
            <h1 className="text-2xl sm:text-3xl font-bold">{seed.name}</h1>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded self-start">
              {seed.category}
            </span>
          </div>
          
          <div className="flex items-center mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < Math.floor(seed.rating) ? '' : 'text-gray-300'} />
              ))}
            </div>
            <span className="ml-2 text-gray-600">{seed.rating} ({seed.reviewCount} reviews)</span>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">${seed.price}</span>
            <span className="text-gray-600 ml-2">(Pack of {seed.seedCount} seeds)</span>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{seed.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Flowering Time:</span> {seed.floweringTime}</li>
                <li><span className="font-medium">Yield:</span> {seed.yield}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Flavors</h3>
              <div className="flex flex-wrap gap-2">
                {seed.flavorProfile.map(flavor => (
                  <span key={flavor} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {flavor}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Effects</h3>
              <div className="flex flex-wrap gap-2">
                {seed.effects.map(effect => (
                  <span key={effect} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    {effect}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="w-full sm:w-1/3">
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>
                    {num} pack{num > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={addToCart}
              className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 sm:px-6 rounded-md font-medium transition-colors w-full sm:w-2/3"
            >
              <FaShoppingCart className="mr-2" />
              <span className="text-sm sm:text-base">Add to Cart - ${(seed.price * quantity).toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoontangPie; 