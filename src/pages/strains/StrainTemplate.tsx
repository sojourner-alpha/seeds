import { Link } from 'react-router-dom';
import { FaSeedling, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

interface StrainProps {
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
  growingDifficulty: string;
  floweringTime: string;
  yield: string;
  thc: string;
  origin: string;
}

const StrainPage = ({ strain }: { strain: StrainProps }) => {
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
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
              strain.availability === 'BULK' 
                ? 'bg-blue-100 text-blue-800'
                : 'bg-amber-100 text-amber-800'
            }`}>
              {strain.availability}
            </span>
          </div>

          <div className="mt-4">
            {strain.availability === 'BULK' ? (
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">${strain.price}</span>
                  <span className="text-gray-600 ml-2">({strain.seedCount} seeds)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl font-bold">${strain.bulkPrice}</span>
                  <span className="text-gray-600 ml-2">({strain.bulkSeedCount} seeds)</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="text-2xl font-bold">${strain.price}</span>
                <span className="text-gray-600 ml-2">({strain.seedCount} seeds)</span>
              </div>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700">{strain.description}</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <ul className="space-y-2 text-gray-700">
                <li><span className="font-medium">THC:</span> {strain.thc}</li>
                <li><span className="font-medium">Difficulty:</span> {strain.growingDifficulty}</li>
                <li><span className="font-medium">Flowering Time:</span> {strain.floweringTime}</li>
                <li><span className="font-medium">Yield:</span> {strain.yield}</li>
                <li><span className="font-medium">Origin:</span> {strain.origin}</li>
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

          <button
            className="mt-8 w-full flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StrainPage; 