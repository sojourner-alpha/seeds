import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaSeedling, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const CartPage = () => {
  // Mock cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Northern Lights',
      image: '/seeds/northern-lights.jpg',
      price: 49.99,
      quantity: 1,
      seedCount: 10,
      category: 'Indica',
    },
    {
      id: 3,
      name: 'Sour Diesel',
      image: '/seeds/sour-diesel.jpg',
      price: 54.99,
      quantity: 2,
      seedCount: 10,
      category: 'Sativa',
    },
  ]);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const total = subtotal + shipping;

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Handle item removal
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>
                
                {/* Cart item list */}
                <div className="divide-y divide-gray-200">
                  {cartItems.map(item => (
                    <div key={item.id} className="py-4 flex flex-col sm:flex-row">
                      {/* Product image */}
                      <div className="sm:w-24 h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400 mb-4 sm:mb-0">
                        <FaSeedling size={24} />
                      </div>
                      
                      {/* Product details */}
                      <div className="sm:ml-4 flex-grow">
                        <div className="flex justify-between mb-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded mr-2">
                            {item.category}
                          </span>
                          <span>{item.seedCount} seeds per pack</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <button 
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-l border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="w-10 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-r border border-gray-300 flex items-center justify-center bg-gray-50 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                          
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 flex items-center"
                          >
                            <FaTrash className="mr-1" size={14} />
                            <span>Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between">
              <Link 
                to="/seeds" 
                className="flex items-center text-green-800 hover:text-green-600"
              >
                ← Continue Shopping
              </Link>
              
              <button 
                onClick={() => setCartItems([])}
                className="text-red-500 hover:text-red-700"
              >
                Clear Cart
              </button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout" 
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <FaArrowRight className="mr-2" />
                  Proceed to Checkout
                </Link>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p className="mb-2">
                    <strong>Shipping Note:</strong> Orders are typically processed 
                    within 1-2 business days and shipped discreetly.
                  </p>
                  <p>
                    <strong>Legal Disclaimer:</strong> All seeds are sold as 
                    novelty collectible items only.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4 text-gray-400">
            <FaShoppingCart size={64} />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't added any seeds to your cart yet.
          </p>
          <Link 
            to="/seeds" 
            className="inline-block bg-green-800 hover:bg-green-900 text-white py-3 px-6 rounded-md font-medium transition-colors"
          >
            Browse Seeds
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage; 