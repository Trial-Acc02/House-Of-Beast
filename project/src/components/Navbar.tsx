import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Facilities', id: 'facilities' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Plans', id: 'plans' },
    { name: 'Trainers', id: 'trainers' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-2xl font-bold text-white tracking-wider"
            >
              <span className="text-red-600">HOUSE OF</span> BEASTS
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-gray-300 hover:text-red-600 px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('register')}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium uppercase tracking-wider transition-all transform hover:scale-105"
              >
                Join Now
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-300 hover:text-red-600 block px-3 py-2 text-base font-medium uppercase tracking-wider w-full text-left transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('register')}
              className="bg-red-600 hover:bg-red-700 text-white block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wider w-full text-left transition-colors"
            >
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
