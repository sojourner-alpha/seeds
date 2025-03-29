import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaLock, FaCreditCard, FaShieldAlt } from 'react-icons/fa';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Mock Stripe promise (in a real app, you would use your publishable key)
const stripePromise = loadStripe('pk_test_mockStripePublishableKey');

const CheckoutPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'USA',
  });

  // Order summary data
  const orderSummary = {
    items: [
      {
        id: 1,
        name: 'Northern Lights',
        price: 49.99,
        quantity: 1,
      },
      {
        id: 3,
        name: 'Sour Diesel',
        price: 54.99,
        quantity: 2,
      },
    ],
    subtotal: 159.97, // 49.99 + (54.99 * 2)
    shipping: 9.99,
    total: 169.96, // 159.97 + 9.99
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would validate the form and process the payment
    alert('Thank you for your order! This would normally process the payment.');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/cart" className="flex items-center text-green-800 hover:text-green-600 mb-6">
        <FaArrowLeft className="mr-2" /> Back to Cart
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Checkout Form */}
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-gray-700 mb-1">Street Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-1">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-gray-700 mb-1">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-gray-700 mb-1">ZIP Code</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-gray-700 mb-1">Country</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="USA">United States</option>
                      <option value="CAN">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AUS">Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
                  <div className="flex items-center mb-4">
                    <FaLock className="text-green-600 mr-2" />
                    <span className="text-gray-700 font-medium">Secure Payment Processing</span>
                  </div>

                  {/* This would be replaced with actual Stripe Elements in a real app */}
                  <div className="mb-4">
                    <label htmlFor="cardNumber" className="block text-gray-700 mb-1">Card Number</label>
                    <div className="flex items-center border border-gray-300 rounded-md bg-white p-2">
                      <FaCreditCard className="text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="4242 4242 4242 4242"
                        className="flex-grow border-none focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="expiryDate" className="block text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        id="expiryDate"
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvc" className="block text-gray-700 mb-1">CVC</label>
                      <input
                        type="text"
                        id="cvc"
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <FaShieldAlt className="text-green-600 mr-2" />
                    <span>Your payment information is encrypted and secure.</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-md font-medium transition-colors"
              >
                Complete Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="mb-4">
              {orderSummary.items.map(item => (
                <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>${orderSummary.shipping.toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span>${orderSummary.total.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mb-4 text-sm text-gray-600">
              <p className="flex items-center font-medium mb-2">
                <FaLock className="text-green-600 mr-2" />
                Secure Checkout
              </p>
              <p>
                Your order information is encrypted and transmitted securely.
              </p>
            </div>
            
            <div className="text-xs text-gray-500">
              <p>
                By completing your purchase, you agree to our 
                <Link to="/terms" className="text-green-700 hover:underline ml-1">
                  Terms of Service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 