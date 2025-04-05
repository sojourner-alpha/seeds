import StrainPage from './StrainTemplate';

const strain = {
  id: 11,
  name: 'Wilson Zero X (Open Pollination)',
  image: '/images/strains/wilson-zero-x-op.jpg',
  price: 20,
  bulkPrice: 80,
  category: 'Hybrid',
  seedCount: 10,
  bulkSeedCount: 50,
  availability: 'BULK' as const,
  description: `Our Wilson Zero (Banana og x Papaya #3) Open Pollination seeds offer collectors a diverse range of phenotypes from 
    this exceptional strain. This polination included Blueberry, Fizzle Rocks, Fruit of Eden, Hucklberry Mellon, 
    Peach Goblin, Peach Smash, and Space Gello pollen all mixed together. The Wilson Zero selected for this pollination had great structure and yiled, 
    as well as an amazing banana flavor.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Focused'],
  flavorProfile: ['Banana', 'Citrus', 'Kush'],
  growingDifficulty: 'Easy to Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '22-26%',
  origin: 'USA',
};

const WilsonZeroXOP = () => {
  return <StrainPage strain={strain} />;
};

export default WilsonZeroXOP; 