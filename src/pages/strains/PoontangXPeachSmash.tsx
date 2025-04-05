import StrainPage from './StrainTemplate';

const strain = {
  id: 4,
  name: 'Poontang X (Peach Smash)',
  image: '/images/strains/poontang-x-peach-smash.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross featuring our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female and Peach Smash (tropicana smash mellons x peachquake) pollen. 
    Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please,
    and is amazing hash strain. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info..."
  },
  effects: ['Relaxed', 'Happy', 'Creative', 'Euphoric'],
  flavorProfile: ['Complex', 'Funky', 'Fruity'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '25-29%',
  origin: 'USA',
};

const PoontangXPeachSmash = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXPeachSmash; 