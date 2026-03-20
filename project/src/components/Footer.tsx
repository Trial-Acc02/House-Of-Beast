import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-red-600">HOUSE OF</span> BEASTS
            </h3>
            <p className="text-gray-400 mb-4">
              Transform your body and mind at Meerut's most premium fitness destination.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-gray-400 hover:text-red-600 transition-colors">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#plans" className="text-gray-400 hover:text-red-600 transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#trainers" className="text-gray-400 hover:text-red-600 transition-colors">
                  Our Trainers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Guidance</li>
              <li>Body Composition Analysis</li>
              <li>Strength Training</li>
              <li>Cardio Workouts</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 uppercase">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-red-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-sm">
                  Aditya Complex, Pallav Puram Phase 1, Near Meerut North Metro Station, Modipuram,
                  Meerut
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-red-600 flex-shrink-0" size={20} />
                <span className="text-sm">info@houseofbeastsgym.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} House of Beasts Gym - Meerut. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed for excellence. Built for champions.
          </p>
        </div>
      </div>
    </footer>
  );
}
