// Developed by WanDev
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import EditorialSection from './components/EditorialSection';
import Footer from './components/Footer';
import CollectionsPage from './components/CollectionsPage';
import BrandPage from './components/BrandPage';
import BoutiquesPage from './components/BoutiquesPage';
import TailoringPage from './components/TailoringPage';
import StaticPage from './components/StaticPage';
import DurbanBoutiquePage from './components/DurbanBoutiquePage';
import ProductDetailsPage from './components/ProductDetailsPage';
import { EDITORIAL_SECTIONS, PRODUCTS } from './constants';
import { Product } from './types';

export type Page = 
  | 'home' 
  | 'collections' 
  | 'brand' 
  | 'boutiques' 
  | 'tailoring' 
  | 'careers' 
  | 'sustainability' 
  | 'contact' 
  | 'shipping' 
  | 'privacy'
  | 'boutique-durban'
  | 'boutique-milan'
  | 'boutique-paris'
  | 'boutique-london'
  | 'boutique-newyork'
  | 'boutique-tokyo'
  | 'product-detail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [history, setHistory] = useState<Page[]>(['home']);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = useCallback((page: Page, productId?: string) => {
    if (page === currentPage && !productId) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      if (page === 'product-detail' && productId) {
        const product = PRODUCTS.find(p => p.id === productId);
        if (product) setSelectedProduct(product);
      }
      setCurrentPage(page);
      setHistory(prev => [...prev, page]);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 400);
  }, [currentPage]);

  const goBack = useCallback(() => {
    if (history.length <= 1) {
      navigateTo('home');
      return;
    }
    
    setIsTransitioning(true);
    setTimeout(() => {
      const newHistory = [...history];
      newHistory.pop(); // remove current page
      const prevPage = newHistory[newHistory.length - 1];
      
      setHistory(newHistory);
      setCurrentPage(prevPage);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 400);
  }, [history, navigateTo]);

  const renderPage = () => {
    switch (currentPage) {
      case 'collections':
        return <CollectionsPage onProductClick={(id) => navigateTo('product-detail', id)} onBack={goBack} />;
      case 'brand':
        return <BrandPage onBack={goBack} />;
      case 'boutiques':
        return <BoutiquesPage onNavigate={navigateTo} onBack={goBack} />;
      case 'tailoring':
        return <TailoringPage onBack={goBack} />;
      case 'boutique-durban':
        return <DurbanBoutiquePage onNavigate={navigateTo} onBack={goBack} />;
      case 'boutique-milan':
      case 'boutique-paris':
      case 'boutique-london':
      case 'boutique-newyork':
      case 'boutique-tokyo':
        const city = currentPage.split('-')[1].toUpperCase();
        return <StaticPage title={`${city} Boutique`} subtitle="Global Presence" content={`Our flagship boutique in ${city} represents the pinnacle of Wan-Wear retail. Experience the full collection in a curated architectural environment.`} onBack={goBack} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailsPage product={selectedProduct} onNavigate={navigateTo} onBack={goBack} />
        ) : (
          <CollectionsPage onProductClick={(id) => navigateTo('product-detail', id)} onBack={goBack} />
        );
      case 'careers':
        return <StaticPage title="Careers" subtitle="Join the Atelier" content="We are always looking for exceptional talent in tailoring, design, and retail excellence. Join our mission to redefine modern luxury." onBack={goBack} />;
      case 'sustainability':
        return <StaticPage title="Sustainability" subtitle="Woven Responsibility" content="Our commitment to the planet is as deep as our commitment to quality. From regenerative wool to carbon-neutral shipping, we prioritize the future." onBack={goBack} />;
      case 'contact':
        return <StaticPage title="Contact Us" subtitle="Personal Assistance" content="Our client advisors are available to assist you with any inquiries regarding our collections, sizing, or private appointments." onBack={goBack} />;
      case 'shipping':
        return <StaticPage title="Shipping & Returns" subtitle="Concierge Delivery" content="We offer complimentary global shipping on all orders. Our returns process is seamless, ensuring your experience remains effortless." onBack={goBack} />;
      case 'privacy':
        return <StaticPage title="Privacy Policy" subtitle="Digital Discretion" content="Your privacy is paramount. We handle your data with the same care and precision we apply to our hand-finished garments." onBack={goBack} />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={() => navigateTo('collections')} />
            <section id="brand" className="py-24 md:py-48 px-6 md:px-16 bg-[#fcfbf9] text-center border-b border-[#f3f1ed]">
              <div className="max-w-4xl mx-auto">
                <span className="text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] font-medium text-[#8a8a8a] uppercase mb-8 md:mb-10 block">
                  The Philosophy
                </span>
                <h2 className="font-serif text-3xl md:text-6xl font-light leading-snug italic mb-10 md:mb-12 px-4">
                  "Elegance is not about being noticed, it's about being remembered."
                </h2>
                <div className="w-[1px] h-16 md:h-20 bg-[#1a1a1a]/20 mx-auto"></div>
              </div>
            </section>
            <ProductGrid 
              onSeeMore={() => navigateTo('collections')} 
              onProductClick={(id) => navigateTo('product-detail', id)}
            />
            {EDITORIAL_SECTIONS.map((section, idx) => (
              <EditorialSection key={idx} data={section} onNavigate={navigateTo} />
            ))}
            <section className="py-24 md:py-48 bg-[#f3f1ed] px-6 md:px-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-6">Join the Wan-Wear World</h3>
                <p className="text-[#555] font-light mb-10 tracking-wide text-sm md:text-base">
                  Be the first to explore our seasonal lookbooks and receive invitations to our private atelier events.
                </p>
                <form className="flex flex-col md:flex-row items-center gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-[#1a1a1a]/30 py-4 text-[10px] tracking-widest focus:outline-none focus:border-[#1a1a1a] transition-all"
                  />
                  <button className="w-full md:w-auto px-10 md:px-12 py-4 bg-[#1a1a1a] text-white text-[10px] tracking-[0.3em] font-medium hover:bg-black transition-all">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4">
              <div className="overflow-hidden aspect-[4/3] md:aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1556905055-8f358a7a4bb4?auto=format&fit=crop&q=80&w=1200"
                  alt="Atelier detail"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[5s]"
                />
              </div>
              <div className="overflow-hidden aspect-[4/3] md:aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1558304970-abd589baebe5?auto=format&fit=crop&q=80&w=1200"
                  alt="Atelier workshop"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[5s]"
                />
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`relative selection:bg-[#1a1a1a] selection:text-white transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background container to ensure navbar is visible on white background pages */}
      <div className={`fixed top-0 left-0 w-full h-24 z-[55] transition-opacity duration-700 ${currentPage === 'home' ? 'opacity-0' : 'opacity-100 bg-[#fcfbf9]'}`} />
      
      <Navbar onNavigate={(page) => navigateTo(page)} activePage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={(page) => navigateTo(page)} />
    </div>
  );
};

export default App;