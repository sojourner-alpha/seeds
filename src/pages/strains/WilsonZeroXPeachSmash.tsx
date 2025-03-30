import StrainPage from './StrainTemplate';

const strain = {
  id: 14,
  name: 'Wilson Zero X (Peach Smash)',
  image: '/images/strains/wilson-zero-x-peach-smash.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross featuring Wilson Zero X and our exceptional Peach Smash genetics. 
    This variety combines the strength of Wilson Zero X with the sweet, peachy notes of Peach Smash, 
    creating a unique collector's item with a delightful terpene profile.`,
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