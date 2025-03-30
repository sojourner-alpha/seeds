import StrainPage from './StrainTemplate';

const strain = {
  id: 20,
  name: 'Trop Cherry X (Space Gello x Zuchi)',
  image: '/images/strains/trop-cherry-x-space-gello-zuchi.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A complex three-way cross featuring Trop Cherry X with the exotic Space Gello x Zuchi line. 
    This limited edition variety brings together multiple premium genetics, creating a unique collector's 
    item with an intricate tropical and sweet terpene profile.`,
  effects: ['Creative', 'Euphoric', 'Energetic', 'Focused'],
  flavorProfile: ['Gassy', 'Sweet', 'Complex'],
  growingDifficulty: 'Moderate to Advanced',
  floweringTime: '9-10 weeks',
  yield: 'High',
  thc: '26-30%',
  origin: 'USA',
};

const TropCherryXSpaceGelloZuchi = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXSpaceGelloZuchi; 