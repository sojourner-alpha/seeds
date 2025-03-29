import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSeedling } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-green-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaSeedling className="text-2xl text-green-400" />
          <Link to="/" className="text-xl font-bold tracking-wider">ElmSeeds</Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-green-300 transition-colors">Home</Link>
          <Link to="/seeds" className="hover:text-green-300 transition-colors">Seeds</Link>
          <Link to="/about" className="hover:text-green-300 transition-colors">About</Link>
          <Link to="/blog" className="hover:text-green-300 transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl hover:text-green-300 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Link>
          
          {/* Mobile menu button - would implement toggle functionality */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 