import StrainPage from './StrainTemplate';

const strain = {
  id: 6,
  name: 'Poontang X (Space Gello x Zuchi)',
  image: '/images/strains/poontang-x-space-gello-zuchi.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross featuring our prized Poontang Pie ((Tropicana x Grape Pie) x Papaya) female and Space Gello x Zuchi ((Space Runtz x gello) x Zuchi) pollen. 
    Poontang Pie is known for its extremely pungent and funky aroma, boasting a truly unique terpene profile that is sure to please,
    and is amazing hash strain. `,
    descriptionLink: {
      url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
      text: "More info..."
    },
  effects: ['Creative', 'Euphoric', 'Focused', 'Energetic'],
  flavorProfile: ['Funky', 'Tropical', 'Complex'],
  growingDifficulty: 'Moderate to Advanced',
  floweringTime: '9-10 weeks',
  yield: 'High',
  thc: '26-30%',
  origin: 'USA',
};

const PoontangXSpaceGelloZuchi = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXSpaceGelloZuchi; 