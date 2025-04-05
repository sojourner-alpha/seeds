import StrainPage from './StrainTemplate';

const strain = {
  id: 17,
  name: 'Resting Bitch Face X (Peach Goblin)',
  image: '/images/strains/rbf-x-peach-goblin.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross made using our prized Resting Bitch Face (Traingle Kush 91 x Flo White #7) and and Peach Goblin (devil Driver x rootbeer) pollen. 
    This variety combines the powerful effects of RBF X with the unique peach terps of Goblin, creating 
    a collector's item that offers both potency and flavor.`,
  effects: ['Relaxed', 'Euphoric', 'Pain Relief', 'Sleepy'],
  flavorProfile: ['Peach', 'Sweet', 'Gassy'],
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