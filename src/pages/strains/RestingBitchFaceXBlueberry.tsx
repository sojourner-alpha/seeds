import StrainPage from './StrainTemplate';

const strain = {
  id: 16,
  name: 'Resting Bitch Face X (Blueberry)',
  image: '/images/strains/rbf-x-blueberry.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining Resting Bitch Face X with classic Blueberry genetics. 
    This variety offers collectors a unique blend of RBF's potency with sweet berry flavors, creating 
    a truly memorable addition to any collection.`,
  effects: ['Relaxed', 'Sleepy', 'Happy', 'Pain Relief'],
  flavorProfile: ['Blueberry', 'Sweet', 'Berry'],
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