import { Link } from 'react-router-dom';
import { FaSeedling, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <FaSeedling className="text-2xl text-green-400" />
              <span className="text-xl font-bold tracking-wider">ElmSeeds</span>
            </div>
            <p className="text-gray-300 text-sm">
              Premium cannabis seeds for collectors and enthusiasts.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/seeds" className="text-gray-300 hover:text-white">Seeds</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/shipping" className="text-gray-300 hover:text-white">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@elmseeds.com</li>
              <li>Hours: Mon-Fri, 9am-5pm PST</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          &copy; {currentYear} ElmSeeds. All seeds are sold as novelty collectible items. 
          Not for germination where prohibited by law.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 