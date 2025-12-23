// Developed by WanDev
import React from 'react';
import BackButton from './BackButton';

interface Props {
  onBack: () => void;
}

const BrandPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="bg-[#fcfbf9]">
      <section className="h-[70vh] relative overflow-hidden flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
          alt="Atelier Heritage"
        />
        <div className="absolute top-32 left-8 md:left-16 z-20">
          <BackButton onClick={onBack} className="mb-0 text-white hover:text-white/70" />
        </div>
        <div className="relative z-10 text-center px-8">
          <span className="text-[10px] tracking-[0.5em] text-[#1a1a1a] uppercase mb-8 block">Est. 2001</span>
          <h1 className="font-serif text-6xl md:text-8xl font-light">The Wan-Wear Legacy</h1>
        </div>
      </section>

      <section className="py-24 md:py-48 px-8 md:px-16 max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl italic mb-12">"We do not design for a season; we design for a lifetime."</h2>
        <div className="space-y-8 text-lg font-light leading-relaxed text-[#555]">
          <p>Founded in the heart of Milan, Wan-Wear was born from a singular vision: to bridge the gap between traditional Italian craftsmanship and the minimalist requirements of the modern wardrobe.</p>
          <p>Our journey began in a small atelier, where our master tailors spent years perfecting the 'Wan Cut'—a silhouette that offers unparalleled comfort without sacrificing a single line of architectural precision.</p>
          <p>Today, while our reach has expanded globally, every single piece is still finished by hand in our Italian workshops. We believe that the soul of a garment lies in the tension of the thread and the quality of the raw fiber.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 pb-32">
        <div className="space-y-6">
          <img src="https://images.unsplash.com/photo-1759078479318-61a755005d30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full aspect-square object-cover" alt="Ethical Sourcing" />
          <h4 className="text-xs tracking-widest font-medium uppercase">Ethical Sourcing</h4>
          <p className="text-sm font-light text-[#8a8a8a]">Working exclusively with heritage mills that prioritize sustainable grazing and regenerative agricultural practices.</p>
        </div>
        <div className="space-y-6">
          <img src="https://images.unsplash.com/photo-1558304970-abd589baebe5?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-square object-cover" alt="Hand-Finishing" />
          <h4 className="text-xs tracking-widest font-medium uppercase">Hand-Finishing</h4>
          <p className="text-sm font-light text-[#8a8a8a]">Every buttonhole is hand-sewn, taking up to 45 minutes per suit to ensure durability and aesthetic perfection.</p>
        </div>
        <div className="space-y-6">
          <img src="https://images.unsplash.com/photo-1598454547585-0739d75a8962?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-square object-cover" alt="Timeless Design" />
          <h4 className="text-xs tracking-widest font-medium uppercase">Timeless Design</h4>
          <p className="text-sm font-light text-[#8a8a8a]">Our patterns are archived and updated only when a true functional improvement can be achieved.</p>
        </div>
      </section>
    </div>
  );
};

export default BrandPage;