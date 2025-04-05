import StrainPage from './StrainTemplate';

const strain = {
  id: 16,
  name: 'Resting Bitch Face X (Blueberry)',
  image: '/images/strains/rbf-x-blueberry.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const, 
  description: `A special limited edition cross combining our prized Resting Bitch Face (Traingle Kush 91 x Flo White #7) Female with 
  Blueberry Preserve (blueberry x first light) F4 pollen. The Reseting Bitch Face selected for this cross had an extremely gassy terpine profile.`,
  effects: ['Relaxed', 'Sleepy', 'Happy', 'Pain Relief'],
  flavorProfile: ['Berry', 'Sweet', 'Gassy'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '23-27%',
  origin: 'USA',
};

const RestingBitchFaceXBlueberry = () => {
  return <StrainPage strain={strain} />;
};

export default RestingBitchFaceXBlueberry; 