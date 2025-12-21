// Developed by WanDev
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import BackButton from './BackButton';

interface Props {
  onProductClick: (id: string) => void;
  onBack: () => void;
}

const CollectionsPage: React.FC<Props> = ({ onProductClick, onBack }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Outerwear', 'Shirts', 'Trousers', 'Footwear'];

  const filteredProducts = activeFilter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-36 bg-white min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <BackButton onClick={onBack} label="BACK TO HOME" />
        
        <header className="mb-20">
          <span className="text-[10px] tracking-[0.5em] text-[#8a8a8a] uppercase block mb-6">Collections</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-12">All Pieces</h1>
          
          <div className="flex flex-wrap gap-x-12 gap-y-6 border-b border-[#eee] pb-6">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`text-[10px] tracking-[0.2em] font-medium transition-colors ${
                  activeFilter === filter ? 'text-[#1a1a1a] border-b border-[#1a1a1a]' : 'text-[#8a8a8a] hover:text-[#1a1a1a]'
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => onProductClick(product.id)}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f1ed] mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="text-center">
                <p className="text-[9px] tracking-[0.1em] text-[#8a8a8a] uppercase mb-1">{product.category}</p>
                <h3 className="text-[11px] tracking-widest font-medium uppercase mb-2">{product.name}</h3>
                <p className="font-serif italic text-[#1a1a1a]">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-[#8a8a8a] font-light italic">No pieces found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollectionsPage;