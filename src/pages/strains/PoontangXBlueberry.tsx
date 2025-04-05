import StrainPage from './StrainTemplate';

const strain = {
  id: 5,
  name: 'Poontang X (Blueberry)',
  image: '/images/strains/poontang-x-blueberry.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female with Blueberry Preserve (blueberry x first light) F4 pollen. 
  Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please,
    and is amazing hash strain. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info..."
  },
  effects: ['Relaxed', 'Happy', 'Euphoric', 'Sleepy'],
  flavorProfile: ['Blueberry', 'Complex', 'Funky'],
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