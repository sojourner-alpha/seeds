import StrainPage from './StrainTemplate';

const strain = {
  id: 21,
  name: 'Trop Cherry X (Peach Goblin)',
  image: '/images/strains/trop-cherry-x-peach-goblin.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `A limited edition cross between Trop Cherry X and our prized Peach Goblin genetics. 
    This variety combines tropical cherry notes with sweet peach terps, creating a collector's item 
    with an exceptional fruit-forward profile.`,
  effects: ['Euphoric', 'Happy', 'Creative', 'Uplifted'],
  flavorProfile: ['Gassy', 'Peach', 'Cherry'],
  growingDifficulty: 'Moderate',
  floweringTime: '8-9 weeks',
  yield: 'High',
  thc: '25-29%',
  origin: 'USA',
};

const TropCherryXPeachGoblin = () => {
  return <StrainPage strain={strain} />;
};

export default TropCherryXPeachGoblin; 