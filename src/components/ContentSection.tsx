import { Play } from 'lucide-react';

export default function ContentSection() {
  return (
    <section className="py-16 bg-[#484747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-600 aspect-video rounded-sm shadow-lg overflow-hidden relative group cursor-pointer">
            <img
              src="https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all">
              <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-8 h-8 text-red-800" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <p className="text-white text-sm font-medium">Caught It</p>
              <p className="text-white text-xs mt-1">A Series of Paintings by Rupert Murdoch</p>
            </div>
          </div>

          <div className="bg-gray-700 rounded-sm shadow-lg overflow-hidden flex flex-col">
            <div className="flex-1 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lost Portraits Rediscovered"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-gray-700">
              <h3 className="text-red-500 font-semibold mb-3">Latest Post</h3>
              <h4 className="text-white text-lg mb-4">Lost Portraits Rediscovered</h4>
              <button className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors font-medium">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
