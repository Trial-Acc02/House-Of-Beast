import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onJoinNow: () => void;
}

export default function Hero({ onJoinNow }: HeroProps) {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-950 opacity-90"></div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight">
            UNLEASH THE
            <span className="block text-red-600 mt-2">BEAST WITHIN</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide">
            Transform Your Body, Transform Your Life
          </p>

          <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience premium fitness at Meerut's most advanced gym. State-of-the-art equipment,
            expert trainers, and a community dedicated to excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onJoinNow}
              className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all transform hover:scale-105 flex items-center gap-2 shadow-2xl"
            >
              Join Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white hover:border-red-600 text-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-bold uppercase tracking-wider transition-all"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
