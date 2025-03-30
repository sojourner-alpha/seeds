import StrainPage from './StrainTemplate';

const strain = {
  id: 1,
  name: 'Poontang X (Open Pollination)',
  image: '/images/strains/poontang-x-op.jpg',
  price: 20,
  bulkPrice: 80,
  category: 'Hybrid',
  seedCount: 10,
  bulkSeedCount: 50,
  availability: 'BULK' as const,
  description: `The Open Pollination variant of our Poontang X line represents a diverse expression of this 
    premium hybrid strain. These seeds offer collectors a chance to explore the full genetic potential of 
    Poontang X, with each seed carrying slightly different trait combinations from our carefully selected 
    parent plants.`,
  effects: ['Euphoric', 'Creative', 'Relaxed', 'Uplifted'],
  flavorProfile: ['Sweet', 'Citrus', 'Earthy'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const PoontangXOP = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXOP; 