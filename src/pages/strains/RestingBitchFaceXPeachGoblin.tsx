import StrainPage from './StrainTemplate';

const strain = {
  id: 17,
  name: 'Resting Bitch Face X (Peach Goblin)',
  image: '/images/strains/rbf-x-peach-goblin.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross between Resting Bitch Face X and our prized Peach Goblin genetics. 
    This variety combines the powerful effects of RBF X with the unique peach terps of Goblin, creating 
    a collector's item that offers both potency and flavor.`,
  effects: ['Relaxed', 'Euphoric', 'Pain Relief', 'Sleepy'],
  flavorProfile: ['Peach', 'Sweet', 'Earthy'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '25-29%',
  origin: 'USA',
};

const RestingBitchFaceXPeachGoblin = () => {
  return <StrainPage strain={strain} />;
};

export default RestingBitchFaceXPeachGoblin; 