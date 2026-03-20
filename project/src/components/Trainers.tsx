import { Award } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    {
      name: 'Rajesh Kumar',
      specialization: 'Strength & Conditioning',
      experience: '8 Years',
      certifications: 'NASM-CPT, CrossFit Level 2',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Priya Sharma',
      specialization: 'Weight Loss & Nutrition',
      experience: '6 Years',
      certifications: 'ACE-CPT, Sports Nutritionist',
      image: 'https://images.pexels.com/photos/6456146/pexels-photo-6456146.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Vikram Singh',
      specialization: 'Bodybuilding & Hypertrophy',
      experience: '10 Years',
      certifications: 'ISSA-CPT, Bodybuilding Coach',
      image: 'https://images.pexels.com/photos/4944315/pexels-photo-4944315.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Anita Verma',
      specialization: 'Functional Training',
      experience: '5 Years',
      certifications: 'NASM-CES, TRX Certified',
      image: 'https://images.pexels.com/photos/6456146/pexels-photo-6456146.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Expert <span className="text-red-600">Trainers</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Train with certified professionals dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-red-500 font-semibold mb-2">{trainer.specialization}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-red-600" size={20} />
                  <span className="text-gray-300 text-sm">{trainer.experience} Experience</span>
                </div>
                <p className="text-gray-400 text-sm">{trainer.certifications}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-lg text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Get Personal Training</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Work one-on-one with our expert trainers to achieve your goals faster with customized
            workout and nutrition plans.
          </p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition-all">
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
}
