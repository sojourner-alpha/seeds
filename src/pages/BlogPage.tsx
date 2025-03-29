import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';

const BlogPage = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Importance of Cannabis Genetics in Modern Cultivation',
      excerpt: 'Understanding the role of genetics in cannabis cultivation and how it affects the end product quality, potency, and characteristics.',
      image: '/blog/genetics.jpg',
      date: 'May 15, 2023',
      author: 'Dr. Sarah Thompson',
      category: 'Genetics',
      tags: ['Genetics', 'Breeding', 'Cultivation'],
    },
    {
      id: 2,
      title: 'A Guide to Collecting Rare Cannabis Seeds',
      excerpt: 'Tips and insights on building a collection of rare and unique cannabis seeds, from storage techniques to selecting valuable genetics.',
      image: '/blog/collecting.jpg',
      date: 'June 22, 2023',
      author: 'Michael Rodriguez',
      category: 'Collection',
      tags: ['Collecting', 'Rare Seeds', 'Preservation'],
    },
    {
      id: 3,
      title: 'Northern Lights: The History of a Legendary Strain',
      excerpt: 'Exploring the origins, development, and impact of one of the most famous cannabis strains of all time - Northern Lights.',
      image: '/blog/northern-lights.jpg',
      date: 'July 8, 2023',
      author: 'Dr. Sarah Thompson',
      category: 'Strain Profiles',
      tags: ['Strain History', 'Indica', 'Legendary Strains'],
    },
    {
      id: 4,
      title: 'Understanding Terpenes: The Aromatic Compounds in Cannabis',
      excerpt: 'A deep dive into cannabis terpenes, their effects, benefits, and how they contribute to the entourage effect and overall experience.',
      image: '/blog/terpenes.jpg',
      date: 'August 14, 2023',
      author: 'Jennifer Lee, Ph.D.',
      category: 'Science',
      tags: ['Terpenes', 'Compounds', 'Aromatics'],
    },
    {
      id: 5,
      title: 'The Evolution of Autoflowering Cannabis Varieties',
      excerpt: 'How autoflowering cannabis has evolved from the original lowryder to the potent, high-yielding varieties available to collectors today.',
      image: '/blog/autoflower.jpg',
      date: 'September 29, 2023',
      author: 'Michael Rodriguez',
      category: 'Breeding',
      tags: ['Autoflower', 'Ruderalis', 'Breeding'],
    },
  ];

  // Mock categories for filtering
  const categories = ['All', 'Genetics', 'Breeding', 'Strain Profiles', 'Science', 'Collection', 'Cultivation'];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">The ElmSeeds Blog</h1>
      <p className="text-gray-600 mb-8">Insights, stories, and knowledge from our cannabis experts</p>
      
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="text-gray-700 mr-2">Categories:</span>
        {categories.map(category => (
          <Link
            key={category}
            to={`/blog?category=${category !== 'All' ? category.toLowerCase() : ''}`}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
      
      {/* Featured Post (first post highlighted) */}
      <div className="mb-12">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-200">
              {/* Placeholder for featured post image */}
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="md:w-1/2 p-6">
              <div className="flex items-center text-green-600 text-sm mb-2">
                <FaTag className="mr-1" />
                <span>{blogPosts[0].category}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <Link to={`/blog/${blogPosts[0].id}`} className="hover:text-green-700 transition-colors">
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaCalendarAlt className="mr-1" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <FaUser className="mr-1" />
                <span>{blogPosts[0].author}</span>
              </div>
              <Link 
                to={`/blog/${blogPosts[0].id}`} 
                className="inline-block px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map(post => (
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
              <h3 className="text-xl font-bold mb-2">
                <Link to={`/blog/${post.id}`} className="hover:text-green-700 transition-colors">
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-xs mb-4">
                <FaCalendarAlt className="mr-1" />
                <span className="mr-3">{post.date}</span>
                <FaUser className="mr-1" />
                <span>{post.author}</span>
              </div>
              <Link 
                to={`/blog/${post.id}`} 
                className="text-green-700 hover:text-green-800 font-medium text-sm"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage; 