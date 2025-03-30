import StrainPage from './StrainTemplate';

const strain = {
  id: 15,
  name: 'Resting Bitch Face X (Open Pollination)',
  image: '/images/strains/rbf-x-op.jpg',
  price: 30,
  category: 'Indica',
  seedCount: 10,
  availability: 'LIMITED' as const,
  description: `The Open Pollination variant of our Resting Bitch Face X line showcases the full genetic 
    potential of this powerful indica. Each seed represents a unique expression of carefully selected 
    RBF X parents, offering collectors a range of phenotypes to explore.`,
  effects: ['Relaxed', 'Sleepy', 'Calm', 'Pain Relief'],
  flavorProfile: ['Earthy', 'Kush', 'Sweet'],
  growingDifficulty: 'Easy to Moderate',
  floweringTime: '7-8 weeks',
  yield: 'High',
  thc: '24-28%',
  origin: 'USA',
};

const RestingBitchFaceXOP = () => {
  return <StrainPage strain={strain} />;
};

export default RestingBitchFaceXOP; 