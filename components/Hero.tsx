// Developed by WanDev
import React from 'react';

interface Props {
  onNavigate: () => void;
}

const Hero: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#e5e1dc]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?auto=format&fit=crop&q=80&w=2400"
          alt="Wan-Wear Luxury Tailoring"
          className="w-full h-full object-cover object-center opacity-90 transition-transform duration-[4000ms] scale-105 hover:scale-100"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center px-6 md:px-4 fade-in">
        <span className="block text-[9px] md:text-[10px] tracking-[0.4em] font-medium text-white/90 mb-4 md:mb-6 uppercase">
          Spring / Summer 2025
        </span>
        <h1 className="font-serif text-4xl md:text-7xl lg:text-8xl text-white font-light leading-tight mb-10 md:mb-12">
          The Art of Quiet <br className="hidden md:block" /> Confidence
        </h1>
        <button 
          onClick={onNavigate}
          className="px-10 py-4 border border-white/40 text-white text-[10px] tracking-[0.3em] font-medium bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-500 uppercase"
        >
          Explore the Collection
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60">
        <div className="w-[1px] h-10 md:h-12 bg-white/40 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;