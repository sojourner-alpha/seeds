import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaShoppingCart, FaArrowLeft, FaStar } from 'react-icons/fa';

const RestingBitchFace = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    alert(`Added ${quantity} pack(s) of Resting Bitch Face to cart`);
  };

  const seed = {
    id: 2,
    name: 'Resting Bitch Face',
    image: '/images/strains/resting-bitch-face.jpg',
    price: 89.99,
    category: 'Indica',
    seedCount: 6,
    rating: 4.8,
    reviewCount: 72,
    description: `Resting Bitch Face is a powerful indica-dominant hybrid known for its potent effects and unique terpene profile. This strain offers a complex blend of flavors and a strong, long-lasting experience.`,
    effects: ['Relaxed', 'Euphoric', 'Sleepy', 'Happy'],
    medicalUses: ['Pain', 'Insomnia', 'Stress', 'Anxiety'],
    flavorProfile: ['Diesel', 'Berry', 'Earthy'],
    floweringTime: '8-9 weeks',
    yield: 'High',
    height: 'Medium',
    origin: 'In-house Genetics',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/seeds" className="flex items-center text-green-800 hover:text-green-600 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Seeds
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Seed Image */}
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="h-80 lg:h-96 w-full bg-gray-100 rounded flex items-center justify-center">
            <FaSeedling size={96} className="text-gray-300" />
          </div>
        </div>

        {/* Seed Info */}
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{seed.name}</h1>
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
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

          <div className="mt-6 grid grid-cols-2 gap-4">
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

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
              className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors w-full sm:w-2/3"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart - ${(seed.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestingBitchFace; 