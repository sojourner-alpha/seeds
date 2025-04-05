import StrainPage from './StrainTemplate';

const strain = {
  id: 21,
  name: 'Trop Cherry X (Peach Goblin)',
  image: '/images/strains/trop-cherry-x-peach-goblin.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross between our prized Trop Cherry ((Tropicana x Grape Pie) x Papaya) female and Peach Goblin (devil Driver x rootbeer) pollen. 
    The Trop Cherry selection used in this cross had an amazing pinkish purple color to the buds, much different than the darker purples that are more common,
    that are sure to please. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/tropicana-cherry/relentless-genetics",
      text: "More info..."
    },
  effects: ['Euphoric', 'Happy', 'Creative', 'Uplifted'],
  flavorProfile: ['Gassy', 'Peach', 'Cherry'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '25-29%',
  origin: 'USA',
};

const TropCherryXPeachGoblin = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXPeachGoblin; 