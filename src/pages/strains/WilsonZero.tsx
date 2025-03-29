import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaShoppingCart, FaArrowLeft, FaStar } from 'react-icons/fa';

const WilsonZero = () => {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    alert(`Added ${quantity} pack(s) of Wilson Zero to cart`);
  };

  const seed = {
    id: 3,
    name: 'Wilson Zero',
    image: '/seeds/wilson-zero.jpg',
    price: 94.99,
    category: 'Hybrid',
    thc: '26-30%',
    seedCount: 6,
    rating: 4.9,
    reviewCount: 64,
    description: `Wilson Zero is a remarkable hybrid that combines potency with exceptional flavor. Known for its balanced effects and impressive trichome production, this strain has become a favorite among collectors.`,
    effects: ['Focused', 'Creative', 'Euphoric', 'Balanced'],
    medicalUses: ['Stress', 'Depression', 'Fatigue', 'Pain'],
    flavorProfile: ['Citrus', 'Pine', 'Sweet'],
    growingDifficulty: 'Intermediate',
    floweringTime: '9-10 weeks',
    yield: 'Medium to High',
    height: 'Medium',
    origin: 'DEO Farms',
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

export default WilsonZero; 