import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Get In <span className="text-red-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Visit us or reach out for any queries
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Address</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Aditya Complex, Pallav Puram Phase 1,<br />
                    Near Meerut North Metro Station,<br />
                    Modipuram, Meerut, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 87654 32109</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400">info@houseofbeastsgym.com</p>
                  <p className="text-gray-400">support@houseofbeastsgym.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-red-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Monday - Friday: 5:30 AM - 11:00 PM</p>
                  <p className="text-gray-400">Saturday: 6:00 AM - 10:00 PM</p>
                  <p className="text-gray-400">Sunday: 6:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg">
              <h4 className="text-white font-bold text-xl mb-2">Ready to Start?</h4>
              <p className="text-white/90 mb-4">
                Visit us for a free trial session and facility tour
              </p>
              <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-gray-100 transition-all">
                Book Free Trial
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Find Us On Map</h3>

            <div className="bg-gray-800 rounded-lg overflow-hidden h-[500px]">
              <iframe
                title="House of Beasts Gym Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.0753939841976!2d77.7104!3d28.9845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDU5JzA0LjIiTiA3N8KwNDInMzcuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Pallav+Puram+Phase+1,+Modipuram,+Meerut"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-bold transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
