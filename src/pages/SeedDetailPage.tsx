import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaSeedling, FaLeaf, FaShoppingCart, FaArrowLeft, FaStar } from 'react-icons/fa';

const SeedDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Mock seed data (in a real app, you would fetch this based on the ID)
  const seed = {
    id: parseInt(id || '1'),
    name: 'Northern Lights',
    image: '/seeds/northern-lights.jpg',
    price: 49.99,
    category: 'Indica',
    thc: '18-20%',
    seedCount: 10,
    rating: 4.8,
    reviewCount: 124,
    description: `Northern Lights is one of the most famous indica strains of all time, a pure indica cherished for its resinous buds and resilient growth. This strain features crystalline resin production, fast flowering, and a sweet yet spicy aroma.`,
    effects: ['Relaxed', 'Sleepy', 'Happy', 'Euphoric'],
    medicalUses: ['Insomnia', 'Pain', 'Stress', 'Anxiety'],
    flavorProfile: ['Earthy', 'Pine', 'Sweet'],
    growingDifficulty: 'Easy',
    floweringTime: '7-9 weeks',
    yield: 'High',
    height: 'Medium',
    origin: 'Afghanistan, Thailand',
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    // In a real app, this would add the product to the cart
    alert(`Added ${quantity} pack(s) of ${seed.name} to cart`);
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
            {/* Placeholder for seed image */}
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
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar className="text-gray-300" />
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
                <li><span className="font-medium">THC:</span> {seed.thc}</li>
                <li><span className="font-medium">Difficulty:</span> {seed.growingDifficulty}</li>
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

      {/* Additional Information */}
      <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Detailed Information</h2>
        
        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Growing Information</h3>
          <p className="text-gray-700">
            Northern Lights is known for being one of the easiest strains to grow, 
            making it perfect for beginners. It's naturally resistant to pests and 
            diseases and can thrive in both indoor and outdoor environments. When 
            grown indoors, it remains compact and produces a generous yield within 
            a relatively short flowering period of 7-9 weeks.
          </p>
        </div>

        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold mb-2">Lineage & Genetics</h3>
          <p className="text-gray-700">
            Northern Lights has its origins in Afghanistan and Thailand. It was 
            developed in Seattle, Washington and later propagated in the Netherlands. 
            This strain has been used to create many famous hybrids and has won numerous 
            Cannabis Cup awards for its quality.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Legal Disclaimer</h3>
          <p className="text-gray-700 text-sm">
            These seeds are sold as novelty collector items only. They are not for 
            germination or cultivation where prohibited by law. Please check your 
            local laws and regulations before purchasing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeedDetailPage; 