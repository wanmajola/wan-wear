// Developed by WanDev
import React from 'react';
import BackButton from './BackButton';

interface Props {
  onBack: () => void;
}

const TailoringPage: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-36 bg-[#fcfbf9]">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <BackButton onClick={onBack} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-[10px] tracking-[0.5em] text-[#8a8a8a] uppercase block mb-6">Services</span>
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-12">Bespoke <br /> Tailoring</h1>
            <div className="space-y-8 text-lg font-light leading-relaxed text-[#555]">
              <p>The Wan-Wear Tailoring service offers the ultimate expression of our sartorial expertise. Each bespoke garment is crafted from a unique pattern, developed specifically for the individual.</p>
              <div className="space-y-6 pt-8">
                <div className="flex gap-6">
                  <span className="font-serif text-2xl italic">01.</span>
                  <div>
                    <h4 className="text-xs tracking-widest font-medium uppercase mb-2">The Consultation</h4>
                    <p className="text-sm font-light text-[#8a8a8a]">Discuss fabric selection and silhouette with our master tailors.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-serif text-2xl italic">02.</span>
                  <div>
                    <h4 className="text-xs tracking-widest font-medium uppercase mb-2">The Measurement</h4>
                    <p className="text-sm font-light text-[#8a8a8a]">Over 30 precise measurements are taken to ensure the perfect drape.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="font-serif text-2xl italic">03.</span>
                  <div>
                    <h4 className="text-xs tracking-widest font-medium uppercase mb-2">The Fittings</h4>
                    <p className="text-sm font-light text-[#8a8a8a]">Two interim fittings to refine the structure and details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-12 md:p-20 shadow-sm border border-[#f3f1ed]">
            <h2 className="font-serif text-3xl font-light mb-10">Request an Appointment</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <input type="text" placeholder="FIRST NAME" className="w-full bg-transparent border-b border-[#eee] py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-all" />
                <input type="text" placeholder="LAST NAME" className="w-full bg-transparent border-b border-[#eee] py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-all" />
              </div>
              <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-[#eee] py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-all" />
              <select className="w-full bg-transparent border-b border-[#eee] py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-all appearance-none">
                <option value="">SELECT BOUTIQUE</option>
                <option value="milan">MILAN</option>
                <option value="paris">PARIS</option>
                <option value="london">LONDON</option>
                <option value="newyork">NEW YORK</option>
                <option value="durban">DURBAN</option>
                <option value="tokyo">TOKYO</option>
              </select>
              <textarea placeholder="MESSAGE (OPTIONAL)" rows={4} className="w-full bg-transparent border-b border-[#eee] py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-all resize-none"></textarea>
              <button className="w-full py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.3em] font-medium hover:bg-black transition-all">
                BOOK CONSULTATION
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoringPage;