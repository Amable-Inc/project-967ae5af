'use client';

import { useState } from 'react';
import { ShoppingCart, Truck, Shield, Leaf, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: 'Organic Cavendish',
      price: '$3.99',
      unit: 'per lb',
      description: 'Premium organic bananas, perfectly ripe',
      rating: 5,
      image: '🍌'
    },
    {
      name: 'Baby Bananas',
      price: '$4.99',
      unit: 'per lb',
      description: 'Sweet and creamy mini bananas',
      rating: 5,
      image: '🍌'
    },
    {
      name: 'Plantains',
      price: '$2.99',
      unit: 'per lb',
      description: 'Perfect for cooking and frying',
      rating: 4,
      image: '🍌'
    },
    {
      name: 'Red Bananas',
      price: '$5.99',
      unit: 'per lb',
      description: 'Exotic and naturally sweet',
      rating: 5,
      image: '🍌'
    }
  ];

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Farm Fresh',
      description: 'Hand-picked from sustainable farms daily'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Fast Delivery',
      description: 'Get your bananas delivered within 24 hours'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Guaranteed',
      description: '100% satisfaction or your money back'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      comment: 'Best bananas I\'ve ever tasted! Always fresh and perfectly ripe.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      comment: 'The delivery is super fast and the quality is consistently excellent.',
      rating: 5
    },
    {
      name: 'Emma Davis',
      comment: 'Love the variety! The red bananas are my absolute favorite.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-4xl">🍌</span>
              <span className="text-2xl font-bold text-yellow-600">BananaMart</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-yellow-600 transition">Home</a>
              <a href="#products" className="text-gray-700 hover:text-yellow-600 transition">Products</a>
              <a href="#about" className="text-gray-700 hover:text-yellow-600 transition">About</a>
              <a href="#contact" className="text-gray-700 hover:text-yellow-600 transition">Contact</a>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition flex items-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart (0)</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-yellow-600 transition">Home</a>
              <a href="#products" className="block text-gray-700 hover:text-yellow-600 transition">Products</a>
              <a href="#about" className="block text-gray-700 hover:text-yellow-600 transition">About</a>
              <a href="#contact" className="block text-gray-700 hover:text-yellow-600 transition">Contact</a>
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full transition flex items-center justify-center space-x-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Cart (0)</span>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                The Finest
                <span className="text-yellow-500"> Bananas</span>
                <br />
                Delivered Fresh
              </h1>
              <p className="text-xl text-gray-600">
                Premium quality bananas from sustainable farms, delivered right to your doorstep. 
                Experience the perfect ripeness every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Shop Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-full text-lg font-semibold transition">
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">10k+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">100%</div>
                  <div className="text-gray-600">Organic</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.9★</div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="text-[300px] leading-none select-none">🍌</div>
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/30 to-transparent rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl hover:bg-yellow-50 transition">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Premium Selection</h2>
            <p className="text-xl text-gray-600">Choose from our variety of fresh, delicious bananas</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden group">
                <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 p-12 flex items-center justify-center">
                  <div className="text-8xl group-hover:scale-110 transition">{product.image}</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                      <span className="text-gray-500 text-sm ml-1">{product.unit}</span>
                    </div>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-full transition">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-yellow-50 rounded-2xl p-8 hover:shadow-lg transition">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for the Best Bananas?
          </h2>
          <p className="text-xl text-yellow-50 mb-8">
            Join thousands of satisfied customers and get your first order delivered free!
          </p>
          <button className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">🍌</span>
                <span className="text-xl font-bold">BananaMart</span>
              </div>
              <p className="text-gray-400">
                The finest bananas delivered fresh to your door.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">All Products</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Organic</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Specialty</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Bundles</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Our Farms</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Sustainability</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Shipping</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Returns</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BananaMart. All rights reserved. Made with 💛 for banana lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
