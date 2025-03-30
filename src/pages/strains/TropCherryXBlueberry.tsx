import StrainPage from './StrainTemplate';

const strain = {
  id: 23,
  name: 'Trop Cherry X (Blueberry)',
  image: '/images/strains/trop-cherry-x-blueberry.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross combining Trop Cherry X with classic Blueberry genetics. 
    This variety offers collectors a unique blend of tropical cherry and sweet berry flavors, 
    creating a truly memorable addition to any collection.`,
  effects: ['Relaxed', 'Happy', 'Euphoric', 'Creative'],
  flavorProfile: ['Cherry', 'Gassy', 'Tropical'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '23-27%',
  origin: 'USA',
};

const TropCherryXBlueberry = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXBlueberry; 