import StrainPage from './StrainTemplate';

const strain = {
  id: 15,
  name: 'Resting Bitch Face X (Open Pollination)',
  image: '/images/strains/rbf-x-op.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `The Open Pollination variant of our Resting Bitch Face (Traingle Kush 91 x Flo White #7) selection showcases the full genetic 
    potential of this powerful indica.  The Reseting Bitch Face selected for this cross had an extremely gassy terpine profile. This polination included Blueberry, 
    Fizzle Rocks, Fruit of Eden, Hucklberry Mellon, Peach Goblin, Peach Smash, and Space Gello pollen all mixed together. `,
  effects: ['Relaxed', 'Sleepy', 'Calm', 'Pain Relief'],
  flavorProfile: ['Gassy', 'Kush', 'Sweet'],
  growingDifficulty: 'Easy to Moderate',
  floweringTime: '7-8 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const RestingBitchFaceXOP = () => {
  return <StrainPage strain={strain} />;
};

export default RestingBitchFaceXOP; 