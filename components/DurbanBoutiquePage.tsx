// Developed by WanDev
import React from 'react';
import { Page } from '../App';
import BackButton from './BackButton';

interface Props {
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

const DurbanBoutiquePage: React.FC<Props> = ({ onNavigate, onBack }) => {
  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      <section className="h-[60vh] relative overflow-hidden flex items-center justify-center bg-[#e5e1dc]">
        <img 
          src="https://images.unsplash.com/photo-1604713590293-ba881ca8d579?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
          alt="Wan-Wear Durban Boutique"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-32 left-8 md:left-16 z-20">
          <BackButton onClick={onBack} className="mb-0 text-white hover:text-white/70" />
        </div>
        <div className="relative z-10 text-center px-8">
          <span className="text-[10px] tracking-[0.5em] text-white uppercase mb-8 block">New Presence</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white">Durban Boutique</h1>
        </div>
      </section>

      <section className="py-24 md:py-48 px-8 md:px-16 max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-[#8a8a8a] uppercase block mb-4">The Location</span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight">Umhlanga Arch</h2>
              <div className="w-12 h-[1px] bg-[#1a1a1a] mt-8"></div>
            </div>
            
            <div className="space-y-8 text-[#555] font-light text-lg leading-relaxed">
              <p>Nestled in the architectural landmark of Umhlanga Arch, our Durban boutique brings the essence of Italian sartorial excellence to the South African coast.</p>
              <p>The space is designed with natural stone, warm oak, and vast glass walls that invite the Indian Ocean light into a sanctuary of quiet luxury. Here, we offer our full range of ready-to-wear collections along with private bespoke measuring suites.</p>
            </div>

            <div className="pt-8 border-t border-[#eee] space-y-4">
              <p className="text-xs tracking-widest font-medium uppercase">Address</p>
              <p className="text-sm font-light text-[#555]">Umhlanga Arch, 1 Nurture Lane, Umhlanga, Durban, 4319, South Africa</p>
              
              <p className="text-xs tracking-widest font-medium uppercase pt-4">Contact</p>
              <p className="text-sm font-light text-[#555]">+27 31 942 0000</p>
              <p className="text-sm font-light text-[#555]">durban@wan-wear.com</p>
            </div>

            <div className="pt-8 border-t border-[#eee] space-y-4">
              <p className="text-xs tracking-widest font-medium uppercase">Hours</p>
              <ul className="text-sm font-light text-[#555] space-y-2">
                <li>Monday – Saturday: 09:00 – 18:00</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            
            <div className="pt-12">
              <button 
                onClick={() => onNavigate('tailoring')}
                className="px-12 py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.3em] font-medium hover:bg-black transition-all"
              >
                BOOK A CONSULTATION
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200" 
              className="w-full aspect-[4/5] object-cover" 
              alt="Boutique Interior" 
            />
            <div className="grid grid-cols-2 gap-8">
               <img src="https://images.unsplash.com/photo-1594932224828-b4b057b696ee?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover" alt="Sartorial Detail" />
               <img src="https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?auto=format&fit=crop&q=80&w=800" className="w-full aspect-square object-cover" alt="Fabric Detail" />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center pb-24">
        <button 
          onClick={() => onNavigate('boutiques')}
          className="text-[10px] tracking-[0.2em] font-medium border-b border-[#1a1a1a] pb-1 hover:text-[#8a8a8a] hover:border-[#8a8a8a] transition-all"
        >
          VIEW ALL BOUTIQUES
        </button>
      </div>
    </div>
  );
};

export default DurbanBoutiquePage;