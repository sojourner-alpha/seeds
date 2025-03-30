import StrainPage from './StrainTemplate';

const strain = {
  id: 7,
  name: 'Poontang X (Fizzle Rocks x Candy Jam)',
  image: '/images/strains/poontang-x-fizzle-rocks-candy-jam.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `An exciting limited edition cross combining Poontang X with our Fizzle Rocks x Candy Jam line. 
    This variety offers collectors a unique blend of sweet and fizzy terpenes, creating a truly distinctive 
    addition to the Poontang X family.`,
  effects: ['Euphoric', 'Creative', 'Uplifted', 'Social'],
  flavorProfile: ['Sweet', 'Candy', 'Citrus'],
  growingDifficulty: 'Moderate',
  floweringTime: '9-10 weeks',
  yield: 'Medium to High',
  thc: '25-29%',
  origin: 'USA',
};

const PoontangXFizzleRocksCandyJam = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXFizzleRocksCandyJam; 