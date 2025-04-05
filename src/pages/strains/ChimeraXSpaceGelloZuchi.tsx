import StrainPage from './StrainTemplate';

const strain = {
  id: 10,
  name: 'Chimera X (Space Gello x Zuchi)',
  image: '/images/strains/chimera-x-space-gello-zuchi.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross featuring a Chimera #3 cut and Space Gello x Zuchi pollen. 
    This complex variety combines multiple premium genetics to create a truly unique collector's item 
    with an intricate terpene profile and exceptional characteristics. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/chimera-nr3/beleaf-cannabis",
      text: "More info..."
    },
  effects: ['Creative', 'Euphoric', 'Energetic', 'Focused'],
  flavorProfile: ['Sweet', 'Tropical', 'Peachy'],
  growingDifficulty: 'Advanced',
  floweringTime: '9-10 weeks',
  yield: 'Medium to High',
  thc: '26-30%',
  origin: 'USA',
};

const ChimeraXSpaceGelloZuchi = () => {
  return <StrainPage strain={strain} />;
};

export default ChimeraXSpaceGelloZuchi; 