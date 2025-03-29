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
    image: '/seeds/resting-bitch-face.jpg',
    price: 89.99,
    category: 'Indica',
    thc: '25-29%',
    seedCount: 6,
    rating: 4.8,
    reviewCount: 72,
    description: `Resting Bitch Face is a powerful indica-dominant hybrid known for its potent effects and unique terpene profile. This strain offers a complex blend of flavors and a strong, long-lasting experience.`,
    effects: ['Relaxed', 'Euphoric', 'Sleepy', 'Happy'],
    medicalUses: ['Pain', 'Insomnia', 'Stress', 'Anxiety'],
    flavorProfile: ['Diesel', 'Berry', 'Earthy'],
    growingDifficulty: 'Intermediate',
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
        {/* Copy the entire layout structure from PoontangPie.tsx */}
        {/* ... Same layout structure as PoontangPie.tsx ... */}
      </div>
    </div>
  );
};

export default RestingBitchFace; 