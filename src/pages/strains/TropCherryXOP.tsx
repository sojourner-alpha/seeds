import StrainPage from './StrainTemplate';

const strain = {
  id: 19,
  name: 'Trop Cherry X (Open Pollination)',
  image: '/images/strains/trop-cherry-x-op.jpg',
  price: 20,
  bulkPrice: 80,
  category: 'Hybrid',
  seedCount: 10,
  bulkSeedCount: 50,
  availability: 'BULK' as const,
  description: `The Open Pollination variant of our Trop Cherry X line showcases the diverse genetic potential 
    of this tropical hybrid. Each seed represents a unique expression of carefully selected Trop Cherry X 
    parents, offering collectors a range of phenotypes with varying tropical and cherry characteristics.`,
  effects: ['Euphoric', 'Creative', 'Uplifted', 'Social'],
  flavorProfile: ['Tropical', 'Cherry', 'Gassy'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const TropCherryXOP = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXOP; 