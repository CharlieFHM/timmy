import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    text: "Tim has such good taste reflected in the lovely things in his shop. His service has been unquestioningly helpful which is so important to us as interior designers at Hotspur Design. He sprung into action recently to get an item urgently to a client which turned out to be just what they'd been looking for. A joy to deal with, thank you!",
    author: "Amanda Ransom"
  },
  {
    id: 2,
    text: "Exceptional quality and service. Timothy's expertise in antique furniture is unmatched. Every piece tells a story and his knowledge brings them to life.",
    author: "James Henderson"
  },
  {
    id: 3,
    text: "A wonderful experience from start to finish. The attention to detail and genuine passion for fine antiques is evident in every interaction.",
    author: "Sarah Williams"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-16 bg-[#484747]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-red-400 text-sm font-semibold mb-8 tracking-wide">
          Some comments from our buyers..
        </h2>

        <div className="bg-gray-700 rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-red-600 fill-current" />
            ))}
          </div>

          <blockquote className="text-white text-center leading-relaxed mb-6 italic">
            "{testimonials[currentIndex].text}"
          </blockquote>

          <p className="text-white text-center font-medium">
            {testimonials[currentIndex].author}
          </p>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
