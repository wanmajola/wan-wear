// Developed by WanDev
import React from 'react';
import { Page } from '../App';
import BackButton from './BackButton';

interface Props {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

const locations = [
  { city: 'MILAN', address: 'Via Montenapoleone, 27', phone: '+39 02 1234 5678', hours: 'Mon–Sat: 10:00 – 19:30', slug: 'boutique-milan' as Page },
  { city: 'PARIS', address: 'Rue du Faubourg Saint-Honoré, 42', phone: '+33 1 23 45 67 89', hours: 'Mon–Sat: 10:00 – 19:00', slug: 'boutique-paris' as Page },
  { city: 'LONDON', address: 'Savile Row, 15', phone: '+44 20 7123 4567', hours: 'Mon–Sat: 10:00 – 18:30', slug: 'boutique-london' as Page },
  { city: 'NEW YORK', address: 'Madison Avenue, 715', phone: '+1 212 555 0199', hours: 'Mon–Sat: 11:00 – 19:00', slug: 'boutique-newyork' as Page },
  { city: 'DURBAN', address: 'Umhlanga Arch, 1 Nurture Lane', phone: '+27 31 942 0000', hours: 'Mon–Sat: 09:00 – 18:00', slug: 'boutique-durban' as Page },
  { city: 'TOKYO', address: 'Ginza, 5-chōme−4−1', phone: '+81 3 1234 5678', hours: 'Daily: 11:00 – 20:00', slug: 'boutique-tokyo' as Page },
];

const BoutiquesPage: React.FC<Props> = ({ onNavigate, onBack }) => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-36 bg-[#fcfbf9]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <BackButton onClick={onBack} />
        
        <header className="max-w-3xl mb-24">
          <span className="text-[10px] tracking-[0.5em] text-[#8a8a8a] uppercase block mb-6">Our Boutiques</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-8">A Global Presence</h1>
          <p className="text-[#555] font-light text-lg">Visit our physical spaces to experience the touch and feel of Wan-Wear craftsmanship in person. Our advisors are ready to assist with bespoke consultations.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {locations.map((loc, idx) => (
            <div key={idx} className="group border-t border-[#eee] pt-12 transition-all hover:border-[#1a1a1a]">
              <h3 className="font-serif text-3xl font-light mb-6 tracking-wide">{loc.city}</h3>
              <div className="space-y-4 text-sm font-light text-[#555] tracking-wide">
                <p>{loc.address}</p>
                <p>{loc.phone}</p>
                <p>{loc.hours}</p>
              </div>
              <div className="mt-10">
                <button 
                  onClick={() => onNavigate(loc.slug as Page)}
                  className="text-[10px] tracking-[0.2em] font-medium border-b border-[#1a1a1a] pb-1 hover:text-[#8a8a8a] hover:border-[#8a8a8a] transition-all"
                >
                  EXPLORE BOUTIQUE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoutiquesPage;