import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const soldItems = [
  {
    id: 1,
    title: 'Mid-19th Century Napoleon III Period Mahog...',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'SOLD'
  },
  {
    id: 2,
    title: 'Late 18th Century Rosewood Sofa Table, Att...',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'SOLD'
  },
  {
    id: 3,
    title: 'Set of Late 18th Century George III Period...',
    image: 'https://images.pexels.com/photos/3021120/pexels-photo-3021120.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'SOLD'
  },
  {
    id: 4,
    title: 'Pair of Brass Dolphin Doorstops',
    image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'SOLD'
  },
  {
    id: 5,
    title: '19th Century Bamboo Brighton Pavilion Occa...',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    status: 'SOLD'
  }
];

export default function SoldItemsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (soldItems.length - itemsPerView + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + soldItems.length - itemsPerView + 1) % (soldItems.length - itemsPerView + 1));
  };

  return (
    <section className="py-16 bg-[#484747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-white text-center mb-12 tracking-wide">Items We Have Sold</h2>

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
              {soldItems.map((item) => (
                <div key={item.id} className="w-1/4 flex-shrink-0 px-3">
                  <div className="group cursor-pointer">
                    <div className="aspect-square bg-gray-600 overflow-hidden rounded-sm shadow-md relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-red-800 text-white px-3 py-1 text-xs font-bold rounded">
                        {item.status}
                      </div>
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
