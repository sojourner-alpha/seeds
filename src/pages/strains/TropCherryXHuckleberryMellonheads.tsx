import StrainPage from './StrainTemplate';

const strain = {
  id: 22,
  name: 'Trop Cherry X (Huckleberry x Mellonheads)',
  image: '/images/strains/trop-cherry-x-huckleberry-mellonheads.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining our prized Trop Cherry ((Tropicana x Grape Pie) x Papaya) female with Huckleberry x Mellonheads pollen. 
    The Trop Cherry selection used in this cross had an amazing pinkish purple color to the buds, much different than the darker purples that are more common,
    that are sure to please. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/tropicana-cherry/relentless-genetics",
      text: "More info..."
    },
  effects: ['Happy', 'Creative', 'Euphoric', 'Social'],
  flavorProfile: ['Cherry', 'Gassy', 'Tropical'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const TropCherryXHuckleberryMellonheads = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXHuckleberryMellonheads; 