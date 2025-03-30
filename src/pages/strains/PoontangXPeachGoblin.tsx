import StrainPage from './StrainTemplate';

const strain = {
  id: 2,
  name: 'Poontang X (Peach Goblin)',
  image: '/images/strains/poontang-x-peach-goblin.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special cross between Poontang X and our prized Peach Goblin genetics. This limited edition 
    strain combines the potent effects of Poontang X with the unique peach terps of Goblin, creating a 
    collector's item that showcases the best of both parent strains.`,
  effects: ['Euphoric', 'Focused', 'Creative', 'Energetic'],
  flavorProfile: ['Complex', 'Funky', 'Tropical'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '25-29%',
  origin: 'USA',
};

const PoontangXPeachGoblin = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXPeachGoblin; 