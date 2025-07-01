import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  MessageCircle,
  ShoppingCart,
  Users,
  Award,
  Clock
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const products = [
    { name: 'Rice', category: 'Grains', image: 'https://th.bing.com/th/id/R.e5e04c813504a9ce5befa0dcd2ec8a30?rik=%2fM%2byTV7GgcPCcA&riu=http%3a%2f%2fsagevfoods.com%2fwp-content%2fuploads%2f2017%2f02%2frice.jpg&ehk=9WLLeoS4Fnngq8T4eQ5rp%2bWdvCmSGXJ5%2flPuzrgLEn8%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Spaghetti', category: 'Grains', image: 'https://static.vecteezy.com/system/resources/previews/007/764/562/large_2x/man-holding-raw-spaghetti-italian-pasta-uncooked-spaghetti-yellow-long-ready-to-cook-in-the-restaurant-italian-food-and-menu-free-photo.JPG' },
    { name: 'Beans', category: 'Grains', image: 'https://www.eatingwell.com/thmb/eZhRgSkmjtM2_b7u9mzkcqVwk1M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-157280489-8c2e8608ee9f4f9abb38f000f633ebc7.jpg' },
    { name: 'Garri', category: 'Grains', image: 'https://gfb.global.ssl.fastly.net/wp-content/uploads/2020/12/garri-1-of-1-2.jpg' },
    { name: 'Fresh Fish', category: 'Proteins', image: 'https://c8.alamy.com/comp/TRFBKP/real-fish-market-and-fresh-fish-seafood-from-atlantic-ocean-in-morocco-TRFBKP.jpg' },
    { name: 'Turkey', category: 'Proteins', image: 'https://www.peta.org/wp-content/uploads/2013/11/uncooked-turkey.jpg' },
    { name: 'Chicken', category: 'Proteins', image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Fresh Eggs', category: 'Proteins', image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Groundnut Oil', category: 'Oils & Spices', image: 'https://th.bing.com/th/id/R.0715b607b54291e1934185a976e6bba7?rik=OIOgZG2WbcGIaA&riu=http%3a%2f%2fwww.dailyexcelsior.com%2fwp-content%2fuploads%2f2018%2f11%2f7-2.jpg&ehk=X%2fcE1wuAEVtFFioN3q49BeccE1S9L8FBW7m61jGd9IY%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Palm Oil', category: 'Oils & Spices', image: 'https://londondrinks.com/wp-content/uploads/2022/09/Red-Oil.png' },
    { name: 'Sachet Oils', category: 'Oils & Spices', image: 'https://th.bing.com/th/id/R.b2c8d837bda717f4855b2262777ddd3a?rik=%2fyVC4I0djMf7PQ&riu=http%3a%2f%2fwaziri.ng%2fwp-content%2fuploads%2f2023%2f12%2fIMG_20230302_123844.jpg&ehk=kj8ftvSeLq38SW5X4ZnFaAuw5FAXklG0MiZQEXfw01U%3d&risl=&pid=ImgRaw&r=0' },
    { name: 'Maggie Cubes', category: 'Oils & Spices', image: 'https://img.freepik.com/premium-photo/seasoning-cubes-used-prepare-food-provide-taste_539365-2001.jpg' },
    { name: 'Groundnuts', category: 'Others', image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Sugar', category: 'Others', image: 'https://www.visitcompletecare.com/wp-content/uploads/2020/11/shutterstock_1564269901-scaled.jpg' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleProductClick = (productName: string) => {
    const message = `Hi! I'm interested in ordering ${productName}. Can you please provide more details?`;
    const whatsappUrl = `https://wa.me/2347072049459?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-orange-500" />
              <span className="text-xl font-bold text-gray-900">Dgov Foodstuff</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 transition-colors">About</button>
              <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-500 transition-colors">Products</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 transition-colors">Contact</button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">Products</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 transition-colors text-left">Contact</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-orange-500">Dgov</span> Frozen & 
                <br />
                Foodstuff <span className="text-green-500">Delight</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Your trusted source for quality frozen foods, fresh groceries, and essential foodstuff. 
                Located at Accord Camp Road, Funaab, we deliver freshness to your doorstep.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/2347072049459" 
                  className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Order on WhatsApp
                </a>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Products
                </button>
              </div>
            </div>
            <div className="lg:justify-self-end">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Fresh groceries and foodstuff" 
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <Clock className="h-8 w-8 text-orange-500" />
                    <div>
                      <p className="font-semibold text-gray-900">Open Daily</p>
                      <p className="text-sm text-gray-600">7AM - 9PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Dgov Foodstuff</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are your neighborhood food store committed to providing fresh, quality groceries and frozen foods at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-orange-50 rounded-xl hover:shadow-lg transition-shadow">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Products</h3>
              <p className="text-gray-600">We source only the finest quality frozen foods, fresh groceries, and essential foodstuff for our customers.</p>
            </div>
            <div className="text-center p-8 bg-green-50 rounded-xl hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We provide excellent customer service and flexible delivery options.</p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl hover:shadow-lg transition-shadow">
              <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local & Trusted</h3>
              <p className="text-gray-600">Located at Accord Camp Road, Funaab, we've been serving the community with dedication and reliability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From fresh proteins to essential cooking ingredients, we have everything you need for your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
                onClick={() => handleProductClick(product.name)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div className="bg-green-500 text-white p-2 rounded-lg group-hover:bg-green-600 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="text-sm text-green-600 font-medium">Click to order on WhatsApp</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">...and many more products available!</p>
            <a 
              href="https://wa.me/2347072049459" 
              className="inline-flex items-center px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with us for more products
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to place an order or have questions? Contact us through any of our social media platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Accord Camp Road, Funaab</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:07072049459" className="text-gray-600 hover:text-green-500">07072049459</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/2347072049459" 
                  className="flex items-center space-x-3 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-semibold">WhatsApp</span>
                </a>
                <a 
                  href="https://facebook.com/profile.php?id=Franklin.Dominic" 
                  className="flex items-center space-x-3 p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="font-semibold">Facebook</span>
                </a>
                <a 
                  href="https://instagram.com/governorfrank87" 
                  className="flex items-center space-x-3 p-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="font-semibold">Instagram</span>
                </a>
                <a 
                  href="https://tiktok.com/@Franklin.Governor1" 
                  className="flex items-center space-x-3 p-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">T</span>
                  </div>
                  <span className="font-semibold">TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ShoppingCart className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Dgov Frozen & Foodstuff Delight</span>
            </div>
            <p className="text-gray-400 mb-6">Your trusted neighborhood food store</p>
            <p className="text-gray-500">© 2024 Dgov Frozen & Foodstuff Delight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;