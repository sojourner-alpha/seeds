import StrainPage from './StrainTemplate';

const strain = {
  id: 2,
  name: 'Poontang X (Peach Goblin)',
  image: '/images/strains/poontang-x-peach-goblin.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A cross made using our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female and Peach Goblin (devil Driver x rootbeer) pollen.
    Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please,
    and is amazing hash strain. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info..."
  },
  effects: ['Euphoric', 'Focused', 'Creative', 'Energetic'],
  flavorProfile: ['Complex', 'Funky', 'Tropical'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '25-29%',
  origin: 'USA',
};

const PoontangXPeachGoblin = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXPeachGoblin; 