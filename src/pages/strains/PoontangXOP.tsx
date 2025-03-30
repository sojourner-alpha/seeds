import StrainPage from './StrainTemplate';

const strain = {
  id: 1,
  name: 'Poontang X (Open Pollination)',
  image: '/images/strains/poontang-x-op.jpg',
  price: 20,
  bulkPrice: 80,
  category: 'Hybrid',
  seedCount: 10,
  bulkSeedCount: 50,
  availability: 'BULK' as const,
  description: `The Open Pollination variant of our Poontang X line represents a diverse expression of this 
    premium hybrid strain. This polination included Blueberry, Fizzle Rocks, Fruit of Eden, Hucklberry Mellon, 
    Peach Goblin, Peach Smash, and Space Gello pollen all mixed together. These seeds offer collectors a chance to explore the full 
    genetic potential of Poontang, with each seed carrying slightly different trait combinations from our carefully selected 
    parent plants. Poontang is known for its extremely pungent and funky aroma, and is a great hash strain. This
    strain is a longtime favorite of Doob and Friends and you will know why when you smell it for the first time. `,
  descriptionLink: {
    url: "https://seedfinder.eu/en/strain-info/poon-tang-pie/oni-seed-co",
    text: "More info"
  },
  effects: ['Euphoric', 'Creative', 'Relaxed', 'Uplifted'],
  flavorProfile: ['Complex', 'Funky', 'Fruity'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const PoontangXOP = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXOP; 