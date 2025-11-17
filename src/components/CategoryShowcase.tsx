export default function CategoryShowcase() {
  return (
    <section className="py-16 bg-[#484747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-red-800 p-12 bg-[#484747] shadow-xl">
          <div className="relative">
            <div className="flex items-center justify-between mb-12">
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Decorative Lamp 1"
                  className="w-32 h-48 object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/1090637/pexels-photo-1090637.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Decorative Lamp 2"
                  className="w-32 h-48 object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/1124960/pexels-photo-1124960.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Decorative Lamp 3"
                  className="w-32 h-48 object-cover rounded-sm shadow-md"
                />
              </div>
            </div>

            <h2 className="text-6xl font-light text-center text-white tracking-wider">Lighting</h2>

            <div className="flex items-center justify-between mt-12">
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/275849/pexels-photo-275849.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Decorative Lamp 4"
                  className="w-32 h-48 object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Decorative Lamp 5"
                  className="w-32 h-48 object-cover rounded-sm shadow-md"
                />
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Decorative Lamp 6"
                  className="w-32 h-48 object-cover rounded-sm shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
