import StrainPage from './StrainTemplate';

const strain = {
  id: 12,
  name: 'Wilson Zero X (Peach Goblin)',
  image: '/images/strains/wilson-zero-x-peach-goblin.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross between Wilson Zero (Banana og x Papaya #3) and Peach Goblin (devil Driver x rootbeer) pollen. 
    The Wilson Zero selected for this pollination had great structure and yiled, as well as an amazing banana flavor.`,
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