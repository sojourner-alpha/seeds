import StrainPage from './StrainTemplate';

const strain = {
  id: 7,
  name: 'Poontang X (Fizzle Rocks x Candy Jam)',
  image: '/images/strains/poontang-x-fizzle-rocks-candy-jam.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `An exciting limited edition cross combining our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female with Fizzle Rocks x Candy Jam pollen. 
    Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please,
    and is amazing hash strain. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info..."
  },
  effects: ['Euphoric', 'Creative', 'Uplifted', 'Social'],
  flavorProfile: ['Sweet', 'CaComplexndy', 'Funky'],
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