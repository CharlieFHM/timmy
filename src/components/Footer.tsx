import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#484747] border-t border-gray-600 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-12 mb-8">
          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="LAPADA"
              className="h-16 mx-auto opacity-50"
            />
          </div>
          <div className="text-center">
            <div className="h-16 flex items-center justify-center">
              <div className="border border-gray-500 px-4 py-2 text-xs text-gray-300">
                SSL SECURED<br/>VERIFIED & SECURE
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="CINOA"
              className="h-16 mx-auto opacity-50"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-300 mb-2">198 Ebury Street, Belgravia, London SW1W 8UN</p>
          <a href="tel:+442078234900" className="text-red-500 font-semibold hover:text-red-400 transition-colors">
            +44 (0)20 7823 4900
          </a>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
        </div>

        <div className="text-center mb-8">
          <button className="bg-red-800 text-white px-6 py-2.5 rounded hover:bg-red-700 transition-colors font-medium">
            JOIN OUR MAILING LIST
          </button>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-red-500 transition-colors">Archive</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Site Map</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Terms & Conditions</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Refunds and Returns</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Shipping</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-red-500 transition-colors">Login</a>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-gray-500">
          <p>© 2025 Timothy Langston Fine Art & Antiques. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
