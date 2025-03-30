import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

interface StrainDetailProps {
  strain: {
    id: number;
    name: string;
    image: string;
    price: number;
    bulkPrice?: number;
    category: string;
    seedCount: number;
    bulkSeedCount?: number;
    availability: 'BULK' | 'LIMITED';
    description: string;
    effects: string[];
    flavorProfile: string[];
    floweringTime: string;
    yield: string;
    height: string;
  }
}

const StrainDetailTemplate = ({ strain }: StrainDetailProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isBulkOrder, setIsBulkOrder] = useState(false);
  const maxOrder = strain.availability === 'BULK' ? 300 : 20;
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handlePackTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsBulkOrder(e.target.value === 'bulk');
    setQuantity(1); // Reset quantity when changing pack type
  };

  const getCurrentPrice = () => {
    if (isBulkOrder && strain.bulkPrice) {
      return strain.bulkPrice * quantity;
    }
    return strain.price * quantity;
  };

  const getCurrentSeedCount = () => {
    if (isBulkOrder && strain.bulkSeedCount) {
      return strain.bulkSeedCount * quantity;
    }
    return strain.seedCount * quantity;
  };

  const addToCart = () => {
    alert(`Added ${quantity} pack(s) of ${strain.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/seeds" className="flex items-center text-green-800 hover:text-green-600 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Seeds
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Strain Image */}
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <div className="h-80 lg:h-96 w-full bg-gray-100 rounded flex items-center justify-center">
            <FaSeedling size={96} className="text-gray-300" />
          </div>
        </div>

        {/* Strain Info */}
        <div>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold">{strain.name}</h1>
            <span className={`text-sm font-medium px-2.5 py-0.5 rounded ${
              strain.availability === 'BULK' 
                ? 'bg-blue-100 text-blue-800'
                : 'bg-amber-100 text-amber-800'
            }`}>
              {strain.availability} (Max order: {maxOrder} seeds)
            </span>
          </div>

          <div className="mt-4">
            {strain.availability === 'BULK' && (
              <div className="mb-4">
                <label htmlFor="packType" className="block text-sm font-medium text-gray-700 mb-1">
                  Pack Size
                </label>
                <select
                  id="packType"
                  value={isBulkOrder ? 'bulk' : 'regular'}
                  onChange={handlePackTypeChange}
                  className="border border-gray-300 rounded-md py-2 px-4 w-full sm:w-1/2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="regular">Regular Pack (10 seeds - $20)</option>
                  <option value="bulk">Bulk Pack (50 seeds - $80)</option>
                </select>
              </div>
            )}

            <div className="flex items-center">
              <span className="text-2xl font-bold">${getCurrentPrice()}</span>
              <span className="text-gray-600 ml-2">
                (Total: {getCurrentSeedCount()} seeds)
              </span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{strain.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">Flowering Time:</span> {strain.floweringTime}</li>
                <li><span className="font-medium">Yield:</span> {strain.yield}</li>
                <li><span className="font-medium">Height:</span> {strain.height}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Flavors</h3>
              <div className="flex flex-wrap gap-2">
                {strain.flavorProfile.map(flavor => (
                  <span key={flavor} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {flavor}
                  </span>
                ))}
              </div>
              
              <h3 className="text-lg font-semibold mt-4 mb-2">Effects</h3>
              <div className="flex flex-wrap gap-2">
                {strain.effects.map(effect => (
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
                {[...Array(5)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} pack{i > 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={addToCart}
              className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors w-full sm:w-2/3"
            >
              <FaShoppingCart className="mr-2" />
              Add to Cart - ${getCurrentPrice().toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrainDetailTemplate; 