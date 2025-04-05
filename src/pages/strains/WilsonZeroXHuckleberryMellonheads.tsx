import StrainPage from './StrainTemplate';

const strain = {
  id: 13,
  name: 'Wilson Zero X (Huckleberry x Mellonheads)',
  image: '/images/strains/wilson-zero-x-huckleberry-mellonheads.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A complex cross combining Wilson Zero (Banana og x Papaya #3) with Huckleberry x Mellonheads pollen. 
    The Wilson Zero selected for this pollination had great structure and yiled, as well as an amazing banana flavor.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Focused'],
  flavorProfile: ['Banana', 'Sweet', 'Complex'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '23-27%',
  origin: 'USA',
};

const WilsonZeroXHuckleberryMellonheads = () => {
  return <StrainPage strain={strain} />;
};

export default WilsonZeroXHuckleberryMellonheads; 