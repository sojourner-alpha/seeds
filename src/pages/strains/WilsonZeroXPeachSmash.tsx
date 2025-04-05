import StrainPage from './StrainTemplate';

const strain = {
  id: 14,
  name: 'Wilson Zero X (Peach Smash)',
  image: '/images/strains/wilson-zero-x-peach-smash.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross featuring Wilson Zero (Banana og x Papaya #3) and Peach Smash (tropicana smash mellons x peachquake) pollen. 
    The Wilson Zero selected for this pollination had great structure and yiled, as well as an amazing banana flavor.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Euphoric'],
  flavorProfile: ['Peach', 'Sweet', 'Banana'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const WilsonZeroXPeachSmash = () => {
  return <StrainPage strain={strain} />;
};

export default WilsonZeroXPeachSmash; 