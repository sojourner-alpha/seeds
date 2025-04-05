import StrainPage from './StrainTemplate';

const strain = {
  id: 8,
  name: 'Poontang X (Huckleberry x Mellonheads)',
  image: '/images/strains/poontang-x-huckleberry-mellonheads.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female with Huckleberry x Mellonheads pollen. 
    Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please,
    and is amazing hash strain. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info..."
  },
  effects: ['Relaxed', 'Creative', 'Happy', 'Focused'],
  flavorProfile: ['Funky', 'Sweet', 'Complex'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const PoontangXHuckleberryMellonheads = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXHuckleberryMellonheads; 