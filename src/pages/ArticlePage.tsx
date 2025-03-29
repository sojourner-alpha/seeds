import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaShareAlt } from 'react-icons/fa';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock blog post data (in a real app, you would fetch this based on ID)
  const article = {
    id: parseInt(id || '1'),
    title: 'The Importance of Cannabis Genetics in Modern Cultivation',
    image: '/blog/genetics.jpg',
    date: 'May 15, 2023',
    author: 'Dr. Sarah Thompson',
    authorTitle: 'Head Grower & Geneticist',
    category: 'Genetics',
    tags: ['Genetics', 'Breeding', 'Cultivation'],
    content: `
      <p>Cannabis cultivation has evolved dramatically over the past few decades, transitioning from primarily outdoor guerrilla growing to sophisticated indoor operations and eventually to industrial-scale facilities. Throughout this evolution, one factor has remained crucial to success: genetics.</p>
      
      <h2>The Foundation of Quality</h2>
      
      <p>At ElmSeeds, we emphasize that genetics are the foundation upon which all other aspects of cannabis cultivation rest. Even with perfect environmental conditions, nutrients, and care, a plant can only express the genetic potential it inherently possesses. This makes the selection of quality genetics the most important decision a collector can make.</p>
      
      <p>High-quality genetics offer several advantages:</p>
      
      <ul>
        <li><strong>Stability</strong> - Consistent expression of desirable traits across generations</li>
        <li><strong>Vigor</strong> - Robust growth patterns and resistance to environmental stressors</li>
        <li><strong>Unique Characteristics</strong> - Distinctive cannabinoid profiles, terpene combinations, and growth patterns</li>
        <li><strong>Heritage Value</strong> - Preservation of landrace varieties and historical cultivars</li>
      </ul>
      
      <h2>The Genetic Bottleneck</h2>
      
      <p>The cannabis industry faces a concerning trend: genetic bottlenecking. As commercial production has expanded, there has been a focus on a relatively small number of high-yielding, potent strains. While understandable from a business perspective, this narrow focus threatens the rich genetic diversity of cannabis.</p>
      
      <p>Many traditional landraces and heirloom varieties risk extinction as they're overlooked in favor of more commercially viable options. At ElmSeeds, we're committed to preserving these genetic treasures through our extensive collection and breeding programs.</p>
      
      <h2>Modern Breeding Techniques</h2>
      
      <p>Cannabis breeding has advanced significantly with the integration of scientific methodologies. Modern breeders now employ techniques such as:</p>
      
      <ul>
        <li><strong>Phenotype Hunting</strong> - Growing multiple plants from the same genetic line to identify superior expressions</li>
        <li><strong>Backcrossing</strong> - Crossing offspring back to a parent to stabilize desirable traits</li>
        <li><strong>Polyploid Induction</strong> - Creating plants with multiple chromosome sets for enhanced characteristics</li>
        <li><strong>Trait-Specific Selection</strong> - Selecting for particular cannabinoid ratios, terpene profiles, or growth patterns</li>
      </ul>
      
      <p>These techniques allow for unprecedented precision in breeding, creating varieties with specific characteristics tailored to different preferences.</p>
      
      <h2>The Role of Genetics in Future Cannabis Development</h2>
      
      <p>As legal barriers continue to fall and scientific understanding deepens, cannabis genetics will play an increasingly important role in the plant's future. Areas of particular interest include:</p>
      
      <ul>
        <li><strong>Medical Applications</strong> - Breeding for specific cannabinoid and terpene profiles that may benefit particular medical conditions</li>
        <li><strong>Environmental Adaptation</strong> - Developing varieties that can thrive in changing climate conditions</li>
        <li><strong>Cannabinoid Expression</strong> - Creating varieties rich in minor cannabinoids like CBG, CBC, and THCV</li>
        <li><strong>Biodiversity Preservation</strong> - Maintaining the genetic diversity of cannabis to ensure adaptability</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>The future of cannabis cultivation lies in its genetics. By preserving biodiversity, employing scientific breeding techniques, and maintaining a broad perspective on what makes cannabis valuable beyond just THC content, we can ensure that this remarkable plant continues to evolve alongside human culture.</p>
      
      <p>At ElmSeeds, we're proud to be part of this genetic journey, offering collectors access to both heritage varieties and cutting-edge genetic developments that represent the full spectrum of cannabis potential.</p>
    `,
    relatedPosts: [
      {
        id: 2,
        title: 'A Guide to Collecting Rare Cannabis Seeds',
        image: '/blog/collecting.jpg',
        category: 'Collection',
      },
      {
        id: 3,
        title: 'Northern Lights: The History of a Legendary Strain',
        image: '/blog/northern-lights.jpg',
        category: 'Strain Profiles',
      },
    ],
  };

  // Function to render HTML content safely
  const createMarkup = (htmlContent: string) => {
    return { __html: htmlContent };
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog" className="flex items-center text-green-800 hover:text-green-600 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Blog
      </Link>

      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Article Header */}
        <div className="h-64 md:h-96 bg-gray-200">
          {/* Placeholder for article image */}
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 md:p-8">
          <div className="flex items-center text-green-600 text-sm mb-2">
            <FaTag className="mr-1" />
            <span>{article.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex items-center text-gray-500 text-sm mb-6 border-b border-gray-200 pb-6">
            <FaCalendarAlt className="mr-1" />
            <span className="mr-4">{article.date}</span>
            <FaUser className="mr-1" />
            <span>{article.author}</span>
            
            <div className="ml-auto flex items-center">
              <FaShareAlt className="mr-1" />
              <span>Share</span>
            </div>
          </div>
          
          {/* Article tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/blog?tag=${tag.toLowerCase()}`}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-green-100 hover:text-green-800 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
          
          {/* Article body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-green-800 prose-a:text-green-600"
            dangerouslySetInnerHTML={createMarkup(article.content)} 
          />
          
          {/* Author bio */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-start">
              <div className="w-16 h-16 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold">{article.author}</h3>
                <p className="text-gray-600 text-sm mb-2">{article.authorTitle}</p>
                <p className="text-gray-700">
                  Dr. Thompson leads our seed selection and breeding program. With over 15 years of experience in botany and cannabis genetics, 
                  she works to preserve rare genetics and develop new varieties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Related Articles */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {article.relatedPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                {/* Placeholder for post image */}
                <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center text-green-600 text-xs mb-2">
                  <FaTag className="mr-1" />
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-green-700 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-green-700 hover:text-green-800 font-medium text-sm"
                >
                  Read Article →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage; 