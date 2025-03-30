import StrainPage from './StrainTemplate';

const strain = {
  id: 18,
  name: 'Resting Bitch Face X (Fizzle Rocks x Candy Jam)',
  image: '/images/strains/rbf-x-fizzle-rocks-candy-jam.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `An exciting limited edition cross combining Resting Bitch Face X with our Fizzle Rocks x 
    Candy Jam line. This variety offers collectors a unique blend of RBF's powerful effects with sweet 
    and fizzy terpenes, creating a truly distinctive addition to the RBF X family.`,
  effects: ['Relaxed', 'Happy', 'Pain Relief', 'Euphoric'],
  flavorProfile: ['Sweet', 'Candy', 'Complex'],
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