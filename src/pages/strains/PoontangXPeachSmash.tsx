import StrainPage from './StrainTemplate';

const strain = {
  id: 4,
  name: 'Poontang X (Peach Smash)',
  image: '/images/strains/poontang-x-peach-smash.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross featuring Poontang X and our exceptional Peach Smash genetics. 
    This variety combines the potency of Poontang X with the sweet, peachy notes of Peach Smash, creating 
    a unique collector's item with an impressive terpene profile.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Euphoric'],
  flavorProfile: ['Complex', 'Funky', 'Fruity'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '25-29%',
  origin: 'USA',
};

const PoontangXPeachSmash = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXPeachSmash; 