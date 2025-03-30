import StrainPage from './StrainTemplate';

const strain = {
  id: 12,
  name: 'Wilson Zero X (Peach Goblin)',
  image: '/images/strains/wilson-zero-x-peach-goblin.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross between Wilson Zero X and our prized Peach Goblin genetics. 
    This variety combines the exceptional potency of Wilson Zero X with the unique peach terps of 
    Goblin, creating a collector's item that showcases the best of both parent strains.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Euphoric'],
  flavorProfile: ['Peach', 'Sweet', 'Banana'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const WilsonZeroXPeachGoblin = () => {
  return <StrainPage strain={strain} />;
};

export default WilsonZeroXPeachGoblin; 