import StrainPage from './StrainTemplate';

const strain = {
  id: 13,
  name: 'Wilson Zero X (Huckleberry x Mellonheads)',
  image: '/images/strains/wilson-zero-x-huckleberry-mellonheads.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A complex cross combining Wilson Zero X with our Huckleberry x Mellonheads line. 
    This limited edition variety brings together the potency of Wilson Zero X with sweet berry notes, 
    creating a unique collector's item with an impressive terpene profile.`,
  effects: ['Relaxed', 'Happy', 'Creative', 'Focused'],
  flavorProfile: ['Berry', 'Sweet', 'Complex'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '23-27%',
  origin: 'USA',
};

const WilsonZeroXHuckleberryMellonheads = () => {
  return <StrainPage strain={strain} />;
};

export default WilsonZeroXHuckleberryMellonheads; 