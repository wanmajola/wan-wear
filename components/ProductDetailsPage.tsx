// Developed by WanDev
import React, { useState } from 'react';
import { Product } from '../types';
import { Page } from '../App';
import BackButton from './BackButton';

interface Props {
  product: Product;
  onNavigate: (page: Page) => void;
  onBack: () => void;
}

const ProductDetailsPage: React.FC<Props> = ({ product, onNavigate, onBack }) => {
  const [activeImage, setActiveImage] = useState(product.image);

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-36 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <BackButton onClick={onBack} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Image Gallery */}
          <div className="lg:col-span-7 space-y-8">
            <div className="aspect-[3/4] overflow-hidden bg-[#f3f1ed]">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-cover animate-fadeIn"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={() => setActiveImage(product.image)}
                className={`aspect-[3/4] overflow-hidden bg-[#f3f1ed] border ${activeImage === product.image ? 'border-[#1a1a1a]' : 'border-transparent'}`}
              >
                <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
              </button>
              <button 
                onClick={() => setActiveImage(product.hoverImage)}
                className={`aspect-[3/4] overflow-hidden bg-[#f3f1ed] border ${activeImage === product.hoverImage ? 'border-[#1a1a1a]' : 'border-transparent'}`}
              >
                <img src={product.hoverImage} alt="Thumbnail 2" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-5 sticky top-48 self-start">
            <div className="mb-12">
              <span className="text-[10px] tracking-[0.4em] text-[#8a8a8a] uppercase block mb-4">{product.category}</span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">{product.name}</h1>
              <p className="font-serif italic text-2xl text-[#1a1a1a]">{product.price}</p>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] tracking-[0.2em] font-medium uppercase mb-6 border-b border-[#eee] pb-4">Description</h3>
                <p className="text-[#555] font-light leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.2em] font-medium uppercase mb-6 border-b border-[#eee] pb-4">Details & Care</h3>
                <ul className="space-y-3">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-sm text-[#555] font-light tracking-wide">
                      <span className="w-1 h-[1px] bg-[#1a1a1a] mt-2.5"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 space-y-4">
                <button className="w-full py-5 bg-[#1a1a1a] text-white text-[10px] tracking-[0.3em] font-medium hover:bg-black transition-all">
                  ADD TO BAG
                </button>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="w-full py-5 border border-[#1a1a1a] text-[#1a1a1a] text-[10px] tracking-[0.3em] font-medium hover:bg-[#1a1a1a] hover:text-white transition-all"
                >
                  ENQUIRE AT ATELIER
                </button>
              </div>

              <div className="pt-12 text-center lg:text-left">
                <p className="text-[9px] tracking-[0.3em] text-[#8a8a8a] uppercase">Complimentary Global Shipping & Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;