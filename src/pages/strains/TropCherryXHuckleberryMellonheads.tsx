import StrainPage from './StrainTemplate';

const strain = {
  id: 22,
  name: 'Trop Cherry X (Huckleberry x Mellonheads)',
  image: '/images/strains/trop-cherry-x-huckleberry-mellonheads.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A special limited edition cross combining Trop Cherry X with our Huckleberry x Mellonheads line. 
    This variety brings together tropical cherry notes with complex berry flavors, creating a unique 
    collector's item with an impressive fruit-forward terpene profile.`,
  effects: ['Happy', 'Creative', 'Euphoric', 'Social'],
  flavorProfile: ['Cherry', 'Gassy', 'Tropical'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const TropCherryXHuckleberryMellonheads = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXHuckleberryMellonheads; 