import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Sharma',
      rating: 5,
      review:
        'House of Beasts has completely transformed my fitness journey. The trainers are incredibly knowledgeable and the equipment is top-notch. Lost 15 kg in 4 months!',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Priya Gupta',
      rating: 5,
      review:
        'Best gym in Meerut hands down! The atmosphere is motivating and the trainers really care about your progress. Highly recommend the premium plan.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Rahul Verma',
      rating: 5,
      review:
        'Amazing facility with state-of-the-art equipment. The personal training sessions helped me gain muscle mass and strength. Worth every penny!',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      name: 'Sneha Kapoor',
      rating: 5,
      review:
        'The trainers are professional and supportive. Great community vibe. Love the early morning cardio sessions. This gym has everything you need.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Member <span className="text-red-600">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Hear what our members have to say
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-lg relative hover:transform hover:scale-105 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 text-red-600/20" size={48} />

              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                />
                <div>
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-500 fill-current" size={16} />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
