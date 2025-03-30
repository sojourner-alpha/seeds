import StrainPage from './StrainTemplate';

const strain = {
  id: 3,
  name: 'Poontang X (Fruit of Eden)',
  image: '/images/strains/poontang-x-fruit-of-eden.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A divine cross between Poontang X and Fruit of Eden genetics. This limited edition strain 
    offers collectors a unique combination of flavors and characteristics. The Fruit of Eden influence brings 
    an exotic fruit profile to the already impressive Poontang X line.`,
  effects: ['Uplifted', 'Creative', 'Euphoric', 'Focused'],
  flavorProfile: ['Complex', 'Funky', 'Fruity'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'Medium to High',
  thc: '24-28%',
  origin: 'USA',
};

const PoontangXFruitOfEden = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXFruitOfEden; 