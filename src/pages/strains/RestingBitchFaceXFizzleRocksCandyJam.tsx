import StrainPage from './StrainTemplate';

const strain = {
  id: 18,
  name: 'Resting Bitch Face X (Fizzle Rocks x Candy Jam)',
  image: '/images/strains/rbf-x-fizzle-rocks-candy-jam.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `An exciting limited edition cross combining our prized Resting Bitch Face (Traingle Kush 91 x Flo White #7) with Fizzle Rocks x Candy Jam pollen. 
  The Reseting Bitch Face selected for this cross had an extremely gassy terpine profile.`,
  effects: ['Relaxed', 'Happy', 'Pain Relief', 'Euphoric'],
  flavorProfile: ['Gassy', 'Candy', 'Complex'],
  growingDifficulty: 'Moderate to Advanced',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '25-29%',
  origin: 'USA',
};

const RestingBitchFaceXFizzleRocksCandyJam = () => {
  return <StrainPage strain={strain} />;
};

export default RestingBitchFaceXFizzleRocksCandyJam; 