import StrainPage from './StrainTemplate';

const strain = {
  id: 9,
  name: 'Chimera X (Open Pollination)',
  image: '/images/strains/chimera-x-op.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `The Open Pollination variant of this Chimera #3 cut showcases the diverse genetic potential 
    of this mythical strain. This polination included Blueberry, Fizzle Rocks, Fruit of Eden, Hucklberry Mellon, 
    Peach Goblin, Peach Smash, and Space Gello pollen all mixed together. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/chimera-nr3/beleaf-cannabis",
      text: "More info..."
    },
  effects: ['Energetic', 'Creative', 'Focused', 'Euphoric'],
  flavorProfile: ['Sweet', 'Citrus', 'Peachy'],
  growingDifficulty: 'Moderate to Advanced',
  floweringTime: '9-10 weeks',
  yield: 'Medium',
  thc: '25-29%',
  origin: 'USA',
};

const ChimeraXOP = () => {
  return <StrainPage strain={strain} />;
};

export default ChimeraXOP; 