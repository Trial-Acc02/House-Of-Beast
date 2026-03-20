import { Heart, Dumbbell, Bike, Timer, Activity, Zap } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Complete range of free weights, barbells, dumbbells, and resistance machines',
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: ['Smith Machines', 'Power Racks', 'Cable Machines', 'Plate Loaded Equipment'],
    },
    {
      icon: Heart,
      title: 'Cardio Zone',
      description: 'Latest cardio equipment for effective fat burning and endurance',
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: ['Treadmills', 'Ellipticals', 'Rowing Machines', 'Stair Climbers'],
    },
    {
      icon: Activity,
      title: 'Functional Training',
      description: 'Dynamic area for functional fitness and athletic performance',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: ['Battle Ropes', 'Kettlebells', 'Medicine Balls', 'Plyometric Boxes'],
    },
    {
      icon: Bike,
      title: 'Spin Studio',
      description: 'High-energy cycling sessions with premium spin bikes',
      image: 'https://images.pexels.com/photos/3775164/pexels-photo-3775164.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: ['Premium Spin Bikes', 'Group Classes', 'Personal Sessions'],
    },
    {
      icon: Zap,
      title: 'CrossFit Area',
      description: 'Dedicated zone for high-intensity interval training',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: ['Pull-up Bars', 'Olympic Platforms', 'Bumper Plates', 'Assault Bikes'],
    },
    {
      icon: Timer,
      title: 'Personal Training',
      description: 'One-on-one coaching sessions with certified trainers',
      image: 'https://images.pexels.com/photos/6456304/pexels-photo-6456304.jpeg?auto=compress&cs=tinysrgb&w=800',
      items: ['Customized Programs', 'Nutrition Guidance', 'Progress Tracking'],
    },
  ];

  return (
    <section id="facilities" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            World-Class <span className="text-red-600">Facilities</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Experience fitness excellence with our premium equipment and training zones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{facility.title}</h3>
                  <p className="text-gray-400 mb-4">{facility.description}</p>

                  <ul className="space-y-2">
                    {facility.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-900 border-2 border-red-600 p-8 rounded-lg inline-block">
            <p className="text-2xl font-bold text-white mb-2">All Equipment Sanitized Daily</p>
            <p className="text-gray-400">Your safety is our top priority</p>
          </div>
        </div>
      </div>
    </section>
  );
}
