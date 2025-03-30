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
  description: `Our Wilson Zero X Open Pollination line offers collectors a diverse range of phenotypes from 
    this exceptional strain. Each seed represents a unique combination of traits from carefully selected 
    Wilson Zero X parents, perfect for collectors interested in exploring the strain's genetic diversity.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Focused'],
  flavorProfile: ['Pine', 'Citrus', 'Earthy'],
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