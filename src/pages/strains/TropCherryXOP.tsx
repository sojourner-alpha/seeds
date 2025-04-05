import StrainPage from './StrainTemplate';

const strain = {
  id: 19,
  name: 'Trop Cherry X (Open Pollination)',
  image: '/images/strains/trop-cherry-x-op.jpg',
  price: 20,
  bulkPrice: 80,
  category: 'Hybrid',
  seedCount: 10,
  bulkSeedCount: 50,
  availability: 'BULK' as const,
  description: `The Open Pollination variant of our Trop Cherry ((Tropicana x Grape Pie) x Papaya) line showcases the diverse genetic potential 
    of this tropical hybrid. This polination included Blueberry, Fizzle Rocks, Fruit of Eden, Hucklberry Mellon, 
    Peach Goblin, Peach Smash, and Space Gello pollen all mixed together. The Trop Cherry selection used in this 
    cross had an amazing pinkish purple color to the buds, much different than the darker purples that are more common,
    that are sure to please.`,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/tropicana-cherry/relentless-genetics",
      text: "More info..."
    },
  effects: ['Euphoric', 'Creative', 'Uplifted', 'Social'],
  flavorProfile: ['Tropical', 'Cherry', 'Gassy'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const TropCherryXOP = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXOP; 