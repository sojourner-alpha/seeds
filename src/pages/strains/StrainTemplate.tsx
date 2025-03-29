import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSeedling, FaShoppingCart, FaArrowLeft, FaStar } from 'react-icons/fa';

interface StrainProps {
  seed: {
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
    seedCount: number;
    availability: 'BULK' | 'LIMITED';
    description: string;
    effects: string[];
    flavorProfile: string[];
    floweringTime: string;
    yield: string;
    height: string;
    origin: string;
  }
}

const StrainTemplate = ({ seed }: StrainProps) => {
  const [quantity, setQuantity] = useState(1);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const addToCart = () => {
    alert(`Added ${quantity} pack(s) of ${seed.name} to cart`);
  };

  const maxOrder = seed.availability === 'BULK' ? 300 : 20;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... existing layout ... */}
      {/* Add availability tag */}
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold">{seed.name}</h1>
        <span className={`text-sm font-medium px-2.5 py-0.5 rounded ${
          seed.availability === 'BULK' 
            ? 'bg-blue-100 text-blue-800'
            : 'bg-amber-100 text-amber-800'
        }`}>
          {seed.availability} (Max order: {maxOrder} seeds)
        </span>
      </div>
      {/* ... rest of the existing layout ... */}
    </div>
  );
};

export default StrainTemplate; 