import StrainPage from './StrainTemplate';

const strain = {
  id: 6,
  name: 'Poontang X (Space Gello x Zuchi)',
  image: '/images/strains/poontang-x-space-gello-zuchi.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A complex three-way cross featuring Poontang X with the exotic Space Gello x Zuchi line. 
    This limited edition variety brings together multiple premium genetics, creating a unique collector's 
    item with an intricate terpene profile and impressive characteristics.`,
  effects: ['Creative', 'Euphoric', 'Focused', 'Energetic'],
  flavorProfile: ['Funky', 'Tropical', 'Complex'],
  growingDifficulty: 'Moderate to Advanced',
  floweringTime: '9-10 weeks',
  yield: 'High',
  thc: '26-30%',
  origin: 'USA',
};

const PoontangXSpaceGelloZuchi = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXSpaceGelloZuchi; 