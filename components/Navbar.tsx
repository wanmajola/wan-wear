// Developed by WanDev
import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface Props {
  onNavigate: (page: Page) => void;
  activePage: Page;
}

const Navbar: React.FC<Props> = ({ onNavigate, activePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'COLLECTIONS', key: 'collections' as Page },
    { label: 'THE BRAND', key: 'brand' as Page },
    { label: 'BOUTIQUES', key: 'boutiques' as Page },
    { label: 'TAILORING', key: 'tailoring' as Page },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  // Logic: White text when background is transparent, black when opaque
  const isOpaque = isScrolled || isMenuOpen;
  const textColorClass = isOpaque ? 'text-[#1a1a1a]' : 'text-white';
  const activeBorderClass = isOpaque ? 'border-[#1a1a1a]' : 'border-white';
  const hoverColorClass = isOpaque ? 'hover:text-[#8a8a8a]' : 'hover:text-white/70';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ease-in-out py-5 md:py-8 px-6 md:px-16 ${
          isOpaque ? 'bg-[#fcfbf9]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
          {/* Desktop Left Nav */}
          <div className="hidden md:flex space-x-10">
            {navItems.slice(0, 2).map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`text-[10px] tracking-[0.2em] font-medium transition-all duration-300 ${textColorClass} ${hoverColorClass} ${
                  activePage === item.key ? `border-b ${activeBorderClass}` : 'border-b border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex-1 text-center">
            <button 
              onClick={() => handleNavClick('home')}
              className={`font-serif text-2xl md:text-3xl tracking-[0.15em] font-light transition-all duration-300 ${textColorClass} hover:opacity-70`}
            >
              WAN-WEAR
            </button>
          </div>

          {/* Desktop Right Nav */}
          <div className="hidden md:flex space-x-10">
            {navItems.slice(2).map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`text-[10px] tracking-[0.2em] font-medium transition-all duration-300 ${textColorClass} ${hoverColorClass} ${
                  activePage === item.key ? `border-b ${activeBorderClass}` : 'border-b border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`text-[10px] tracking-[0.25em] font-medium px-4 py-2 z-[70] transition-all duration-500 rounded-sm ${
                isMenuOpen 
                  ? 'text-[#1a1a1a] border border-[#1a1a1a]/20 bg-[#1a1a1a]/5' 
                  : textColorClass
              }`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#fcfbf9] z-[50] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] md:hidden ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-8 opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12 px-8">
          {navItems.map((item, index) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              style={{ transitionDelay: isMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
              className={`text-lg tracking-[0.4em] font-light transition-all duration-700 group relative ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              } ${
                activePage === item.key ? 'text-[#1a1a1a]' : 'text-[#8a8a8a]'
              } hover:text-[#1a1a1a]`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-[#1a1a1a] transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </button>
          ))}
          
          <div 
            style={{ transitionDelay: isMenuOpen ? `${navItems.length * 100 + 300}ms` : '0ms' }}
            className={`pt-12 flex flex-col items-center space-y-6 transition-all duration-700 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
             <div className="flex space-x-8">
               <button onClick={() => handleNavClick('contact')} className="text-[10px] tracking-[0.25em] text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a]/20 pb-1 uppercase">CONTACT</button>
               <button onClick={() => handleNavClick('shipping')} className="text-[10px] tracking-[0.25em] text-[#8a8a8a] hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a]/20 pb-1 uppercase">SHIPPING</button>
             </div>
             <p className="text-[9px] tracking-[0.4em] text-[#ccc] pt-12 uppercase font-medium">WAN-WEAR ATELIER 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;