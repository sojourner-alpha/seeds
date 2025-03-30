import StrainPage from './StrainTemplate';

const strain = {
  id: 5,
  name: 'Poontang X (Blueberry)',
  image: '/images/strains/poontang-x-blueberry.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining Poontang X with classic Blueberry genetics. 
    This variety offers collectors a unique blend of modern potency and classic berry flavors, creating 
    a truly memorable addition to any collection.`,
  effects: ['Relaxed', 'Happy', 'Euphoric', 'Sleepy'],
  flavorProfile: ['Blueberry', 'Sweet', 'Berry'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '23-27%',
  origin: 'USA',
};

const PoontangXBlueberry = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXBlueberry; 