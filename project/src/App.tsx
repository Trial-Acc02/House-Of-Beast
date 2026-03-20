import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import MembershipPlans from './components/MembershipPlans';
import Trainers from './components/Trainers';
import Timings from './components/Timings';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import BMICalculator from './components/BMICalculator';
import RegistrationForm from './components/RegistrationForm';
import AdminDashboard from './components/AdminDashboard';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  const [showRegistration, setShowRegistration] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'register') {
      setShowRegistration(true);
    } else if (sectionId === 'admin') {
      setShowAdmin(true);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar onNavigate={handleNavigate} />

      <Hero onJoinNow={() => setShowRegistration(true)} />

      <About />

      <Facilities />

      <Gallery />

      <MembershipPlans onJoinNow={() => setShowRegistration(true)} />

      <Trainers />

      <Timings />

      <Testimonials />

      <BMICalculator />

      <Contact />

      <Footer />

      <WhatsAppButton />

      {showRegistration && <RegistrationForm onClose={() => setShowRegistration(false)} />}

      {showAdmin && <AdminDashboard onClose={() => setShowAdmin(false)} />}

      <button
        onClick={() => setShowAdmin(true)}
        className="fixed bottom-6 left-6 z-40 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider transition-all shadow-lg"
      >
        Admin
      </button>
    </div>
  );
}

export default App;
