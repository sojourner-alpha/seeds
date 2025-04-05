import StrainPage from './StrainTemplate';

const strain = {
  id: 23,
  name: 'Trop Cherry X (Blueberry)',
  image: '/images/strains/trop-cherry-x-blueberry.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross combining our prized Trop Cherry ((Tropicana x Grape Pie) x Papaya) female with Blueberry Preserve (blueberry x first light) F4 pollen. 
    The Trop Cherry selection used in this cross had an amazing pinkish purple color to the buds, much different than the darker purples that are more common,
    that are sure to please. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/tropicana-cherry/relentless-genetics",
      text: "More info..."
    },
  effects: ['Relaxed', 'Happy', 'Euphoric', 'Creative'],
  flavorProfile: ['Cherry', 'Gassy', 'Tropical'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '23-27%',
  origin: 'USA',
};

const TropCherryXBlueberry = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXBlueberry; 