import StrainPage from './StrainTemplate';

const strain = {
  id: 8,
  name: 'Poontang X (Huckleberry x Mellonheads)',
  image: '/images/strains/poontang-x-huckleberry-mellonheads.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining Poontang X with our Huckleberry x Mellonheads line. 
    This variety brings together complex berry notes with the potent characteristics of Poontang X, creating 
    a unique collector's item with an impressive terpene profile.`,
  effects: ['Relaxed', 'Creative', 'Happy', 'Focused'],
  flavorProfile: ['Funky', 'Sweet', 'Complex'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const PoontangXHuckleberryMellonheads = () => {
  return <StrainPage strain={strain} />;
};

export default PoontangXHuckleberryMellonheads; 