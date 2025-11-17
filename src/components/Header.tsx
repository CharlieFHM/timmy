import { ShoppingCart, Heart, Search, Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#484747] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 py-6">
          <div className="flex-shrink-0">
            <img
              src="/image.png"
              alt="Timothy Langston Fine Art & Antiques"
              className="h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-7 flex-1">
            <a href="#home" className="text-white hover:text-red-400 transition-colors font-medium text-sm">Home</a>
            <a href="#interior-design" className="text-white hover:text-red-400 transition-colors font-medium text-sm">Interior Design</a>
            <a href="#restoration" className="text-white hover:text-red-400 transition-colors font-medium text-sm">Restoration</a>
            <a href="#blog" className="text-white hover:text-red-400 transition-colors font-medium text-sm">Blog</a>
            <a href="#about" className="text-white hover:text-red-400 transition-colors font-medium text-sm">About</a>
            <a href="#contact" className="text-white hover:text-red-400 transition-colors font-medium text-sm">Contact</a>
          </nav>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5 text-white cursor-pointer hover:text-red-400 transition-colors" />
              <span className="text-white text-sm">Wishlist</span>
              <Heart className="w-5 h-5 text-white ml-3 cursor-pointer hover:text-red-400 transition-colors" />
            </div>

            <div className="flex items-center space-x-2 text-white text-sm pl-8 border-l border-gray-500">
              <Phone className="w-4 h-4" />
              <a href="tel:+442078234900" className="hover:text-red-400 transition-colors font-medium">
                +44 (0)20 7823 4900
              </a>
            </div>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <div className="border-t border-gray-600 py-4 flex items-center justify-between">
          <nav className="hidden lg:flex items-center space-x-6 text-xs flex-1">
            <a href="#latest" className="text-white hover:text-red-400 transition-colors">Latest</a>
            <a href="#sale" className="text-white hover:text-red-400 transition-colors">Sale</a>
            <a href="#botanical-art" className="text-white hover:text-red-400 transition-colors">Botanical Art</a>
            <a href="#furniture" className="text-white hover:text-red-400 transition-colors">Furniture</a>
            <a href="#vases" className="text-white hover:text-red-400 transition-colors">Vases</a>
            <a href="#objects" className="text-white hover:text-red-400 transition-colors">Objects</a>
            <a href="#pictures" className="text-white hover:text-red-400 transition-colors">Pictures</a>
            <a href="#prints" className="text-white hover:text-red-400 transition-colors">Prints</a>
            <a href="#lighting" className="text-white hover:text-red-400 transition-colors">Lighting</a>
            <a href="#modern" className="text-white hover:text-red-400 transition-colors">Modern</a>
            <a href="#exceptional" className="text-white hover:text-red-400 transition-colors">Exceptional</a>
            <a href="#lamp-shades" className="text-white hover:text-red-400 transition-colors">Lamp Shades</a>
          </nav>

          <div className="hidden lg:flex items-center">
            <input
              type="search"
              placeholder="Search..."
              className="px-4 py-2 border border-gray-500 bg-gray-700 text-white placeholder-gray-400 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <button className="bg-gray-700 px-3 py-2 border border-l-0 border-gray-500 rounded-r-md hover:bg-gray-600 transition-colors">
              <Search className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-600">
            <nav className="flex flex-col space-y-3 mb-4">
              <a href="#home" className="text-white hover:text-red-400 transition-colors font-medium">Home</a>
              <a href="#interior-design" className="text-white hover:text-red-400 transition-colors font-medium">Interior Design</a>
              <a href="#restoration" className="text-white hover:text-red-400 transition-colors font-medium">Restoration</a>
              <a href="#blog" className="text-white hover:text-red-400 transition-colors font-medium">Blog</a>
              <a href="#about" className="text-white hover:text-red-400 transition-colors font-medium">About</a>
              <a href="#contact" className="text-white hover:text-red-400 transition-colors font-medium">Contact</a>
            </nav>
            <div className="pt-4 border-t border-gray-600">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-500 bg-gray-700 text-white placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <div className="mt-4 flex items-center space-x-2 text-white text-sm">
              <Phone className="w-4 h-4" />
              <a href="tel:+442078234900" className="hover:text-red-400 transition-colors font-medium">
                +44 (0)20 7823 4900
              </a>
            </div>
          </div>
        )}
      </div>

      <div className="bg-red-800 text-white py-2.5 text-center text-sm">
        <span className="font-medium">Be First to Learn about New Sensational Discoveries</span>
        <button className="ml-4 bg-white text-red-800 px-4 py-1 rounded hover:bg-gray-100 transition-colors font-medium text-xs">
          Sign Up
        </button>
      </div>
    </header>
  );
}
