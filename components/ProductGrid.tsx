// Developed by WanDev
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

const ProductCard: React.FC<{ product: Product, onClick: (id: string) => void }> = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product.id)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f3f1ed] mb-6">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <button className="w-full py-3 bg-white/90 backdrop-blur-sm text-[10px] tracking-widest font-medium uppercase">
            View Details
          </button>
        </div>
      </div>
      <div className="text-center px-4">
        <p className="text-[10px] tracking-[0.1em] text-[#8a8a8a] uppercase mb-1">
          {product.category}
        </p>
        <h3 className="text-xs tracking-widest font-medium mb-2 uppercase">
          {product.name}
        </h3>
        <p className="font-serif italic text-lg text-[#1a1a1a]">{product.price}</p>
      </div>
    </div>
  );
};

interface Props {
  onSeeMore: () => void;
  onProductClick: (id: string) => void;
}

const ProductGrid: React.FC<Props> = ({ onSeeMore, onProductClick }) => {
  return (
    <section id="collections" className="py-24 md:py-36 bg-white">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-[10px] tracking-[0.4em] font-medium text-[#8a8a8a] uppercase block mb-4">
            Curated Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light">Featured Arrivals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
        <div className="mt-20 text-center">
          <button 
            onClick={onSeeMore}
            className="px-12 py-4 border border-[#1a1a1a] text-[10px] tracking-[0.3em] font-medium hover:bg-[#1a1a1a] hover:text-white transition-all duration-500 uppercase"
          >
            Shop All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;