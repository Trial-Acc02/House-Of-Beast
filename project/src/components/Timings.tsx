import { Clock, Calendar } from 'lucide-react';

export default function Timings() {
  const schedule = [
    { day: 'Monday - Friday', time: '5:30 AM - 11:00 PM' },
    { day: 'Saturday', time: '6:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '6:00 AM - 9:00 PM' },
  ];

  const classSchedule = [
    { time: '6:00 AM', class: 'Morning Cardio Blast', trainer: 'Priya Sharma' },
    { time: '7:00 AM', class: 'Strength Training', trainer: 'Vikram Singh' },
    { time: '5:00 PM', class: 'CrossFit Basics', trainer: 'Rajesh Kumar' },
    { time: '6:30 PM', class: 'Functional Fitness', trainer: 'Anita Verma' },
    { time: '8:00 PM', class: 'HIIT Training', trainer: 'Rajesh Kumar' },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Gym <span className="text-red-600">Schedule</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're open when you need us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Operating Hours</h3>
            </div>

            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg flex justify-between items-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{item.day}</span>
                  <span className="text-red-500 font-bold">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg">
              <p className="text-white font-bold text-xl mb-2">Early Bird Special!</p>
              <p className="text-white/90">
                Join us before 7 AM and experience the gym at its quietest
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Calendar className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">Group Classes</h3>
            </div>

            <div className="space-y-4">
              {classSchedule.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.class}</h4>
                      <p className="text-gray-400 text-sm">with {item.trainer}</p>
                    </div>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-gray-400 text-sm">
              Group classes are included in Premium and Elite memberships
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
