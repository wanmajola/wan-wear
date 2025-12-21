// Developed by WanDev
import React from 'react';
import { Page } from '../App';

interface Props {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#fcfbf9] border-t border-[#eee] pt-20 md:pt-24 pb-12 px-8 md:px-16">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 text-left">
            <button onClick={() => onNavigate('home')} className="font-serif text-2xl tracking-widest mb-6 block hover:opacity-70 transition-opacity">WAN-WEAR</button>
            <p className="text-sm text-[#8a8a8a] font-light leading-relaxed max-w-xs">
              Exceptional quality and timeless silhouettes designed for the modern individual who values craftsmanship above all else.
            </p>
          </div>
          
          <div className="flex flex-col items-start">
            <h5 className="text-[10px] tracking-[0.2em] font-medium uppercase mb-6">Collections</h5>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigate('collections')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">New Arrivals</button></li>
              <li><button onClick={() => onNavigate('collections')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">The Essentials</button></li>
              <li><button onClick={() => onNavigate('collections')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Outerwear</button></li>
              <li><button onClick={() => onNavigate('tailoring')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Bespoke</button></li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h5 className="text-[10px] tracking-[0.2em] font-medium uppercase mb-6">Company</h5>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigate('brand')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Our Story</button></li>
              <li><button onClick={() => onNavigate('boutiques')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Boutiques</button></li>
              <li><button onClick={() => onNavigate('careers')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Careers</button></li>
              <li><button onClick={() => onNavigate('sustainability')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Sustainability</button></li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h5 className="text-[10px] tracking-[0.2em] font-medium uppercase mb-6">Customer Service</h5>
            <ul className="space-y-4 text-left">
              <li><button onClick={() => onNavigate('contact')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Contact Us</button></li>
              <li><button onClick={() => onNavigate('shipping')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Shipping & Returns</button></li>
              <li><button onClick={() => onNavigate('privacy')} className="text-sm text-[#8a8a8a] hover:text-black transition-colors font-light text-left">Privacy Policy</button></li>
              <div className="flex space-x-6 mt-8">
                <a href="#" className="text-[#8a8a8a] hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest font-medium text-[#8a8a8a] uppercase border-t border-[#eee] pt-12">
          <p>© 2025 Wan-Wear. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-8">
            <p>Developed by WanDev</p>
            <p>Italy • Milan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;