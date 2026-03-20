import { Award, Users, Dumbbell, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Dumbbell,
      title: 'Modern Equipment',
      description: 'Latest fitness machines and free weights from top international brands',
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Certified professionals dedicated to your fitness journey',
    },
    {
      icon: Award,
      title: 'Spacious Environment',
      description: 'Large, well-ventilated facility designed for optimal training',
    },
    {
      icon: Target,
      title: 'Results Driven',
      description: 'Personalized programs tailored to achieve your fitness goals',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            About <span className="text-red-600">House of Beasts</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to Meerut's premier fitness destination
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              House of Beasts Gym is not just a fitness center—it's a movement. Located in the heart
              of Meerut at Aditya Complex, Pallav Puram Phase 1, we've created a premium fitness
              sanctuary designed to help you achieve your ultimate physical potential.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              With state-of-the-art equipment, expert trainers, and a motivating atmosphere, we
              provide everything you need to transform your body and mind. Our spacious facility
              ensures you never feel cramped, allowing you to focus entirely on your workout.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Gym Interior"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-black">5+</p>
              <p className="text-sm uppercase tracking-wide">Years Experience</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-all group hover:transform hover:scale-105"
              >
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-700 transition-colors">
                  <Icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h3>
          <div className="grid sm:grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-5xl font-black text-white mb-2">500+</p>
              <p className="text-white uppercase tracking-wide">Active Members</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white mb-2">10+</p>
              <p className="text-white uppercase tracking-wide">Expert Trainers</p>
            </div>
            <div>
              <p className="text-5xl font-black text-white mb-2">100+</p>
              <p className="text-white uppercase tracking-wide">Equipment Pieces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
