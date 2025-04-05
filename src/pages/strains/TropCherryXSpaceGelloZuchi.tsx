import StrainPage from './StrainTemplate';

const strain = {
  id: 20,
  name: 'Trop Cherry X (Space Gello x Zuchi)',
  image: '/images/strains/trop-cherry-x-space-gello-zuchi.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A complex three-way cross featuring our prized Trop Cherry ((Tropicana x Grape Pie) x Papaya) female and Space Gello x Zuchi ((Space Runtz x gello) x Zuchi) pollen. 
   The Trop Cherry selection used in this cross had an amazing pinkish purple color to the buds, much different than the darker purples that are more common,
    that are sure to please. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/tropicana-cherry/relentless-genetics",
      text: "More info..."
    },
  effects: ['Creative', 'Euphoric', 'Energetic', 'Focused'],
  flavorProfile: ['Gassy', 'Sweet', 'Complex'],
  growingDifficulty: 'Moderate to Advanced',
  floweringTime: '9-10 weeks',
  yield: 'High',
  thc: '26-30%',
  origin: 'USA',
};

const TropCherryXSpaceGelloZuchi = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXSpaceGelloZuchi; 