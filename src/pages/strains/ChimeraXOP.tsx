import StrainPage from './StrainTemplate';

const strain = {
  id: 9,
  name: 'Chimera X (Open Pollination)',
  image: '/images/strains/chimera-x-op.jpg',
  price: 30,
  category: 'Hybrid',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `The Open Pollination variant of our Chimera X line showcases the diverse genetic potential 
    of this mythical strain. Each seed represents a unique expression of carefully selected Chimera X 
    parents, offering collectors a range of phenotypes to explore.`,
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