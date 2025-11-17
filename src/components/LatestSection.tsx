import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const items = [
  {
    id: 1,
    title: 'Nineteenth Century Brass Mounted Camphor Trunk',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Pair of Mid-Century Modern Pottery Jar Lamps',
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Tall 19th Century Empire Style Column Lamp',
    image: 'https://images.pexels.com/photos/275849/pexels-photo-275849.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 4,
    title: 'Pair of Sang de Boeuf Porcelain Bottle Vase Lamps',
    image: 'https://images.pexels.com/photos/1090637/pexels-photo-1090637.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 5,
    title: 'Six Seventeenth Century Engravings Depicting European Nobles',
    image: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function LatestSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (items.length - itemsPerView + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length - itemsPerView + 1) % (items.length - itemsPerView + 1));
  };

  return (
    <section className="py-16 bg-[#484747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-white text-center mb-12 tracking-wide">Latest</h2>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[#484747] shadow-lg rounded-full p-2 hover:bg-gray-600 transition-colors border border-gray-600"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {items.map((item) => (
                <div key={item.id} className="w-1/4 flex-shrink-0 px-3">
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-gray-600 overflow-hidden rounded-sm shadow-md">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[#484747] shadow-lg rounded-full p-2 hover:bg-gray-600 transition-colors border border-gray-600"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
