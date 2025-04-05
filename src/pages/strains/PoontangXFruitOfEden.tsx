import StrainPage from './StrainTemplate';

const strain = {
  id: 3,
  name: 'Poontang X (Fruit of Eden)',
  image: '/images/strains/poontang-x-fruit-of-eden.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A divine cross between our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female and Fruit of Eden (peach marschino x peachquake) pollen. 
  Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info..."
  },
  effects: ['Uplifted', 'Creative', 'Euphoric', 'Focused'],
  flavorProfile: ['Complex', 'Funky', 'Fruity'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '24-28%',
  origin: 'USA',
};

const PoontangXFruitOfEden = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXFruitOfEden; 