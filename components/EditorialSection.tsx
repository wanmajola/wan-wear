// Developed by WanDev
import React, { useEffect, useRef, useState } from 'react';
import { EditorialSection as EditorialType } from '../types';
import { Page } from '../App';

interface Props {
  data: EditorialType;
  onNavigate: (page: Page) => void;
}

const EditorialSection: React.FC<Props> = ({ data, onNavigate }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`py-20 md:py-36 px-6 md:px-16 max-w-screen-2xl mx-auto flex flex-col ${
        data.layout === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
      } items-center gap-12 md:gap-24 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
    >
      <div className="w-full md:w-1/2 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full aspect-[4/5] object-cover transition-transform duration-[3s] hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
        <span className="text-[10px] tracking-[0.3em] text-[#8a8a8a] uppercase mb-6 block">
          {data.subtitle}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
          {data.title}
        </h2>
        <p className="text-[#555] font-light leading-relaxed text-base md:text-lg max-w-lg mb-10">
          {data.content}
        </p>
        <div>
          <button
            onClick={() => onNavigate('collections')}
            className="inline-block text-[11px] tracking-[0.2em] font-medium border-b border-[#1a1a1a] pb-1 hover:text-[#8a8a8a] hover:border-[#8a8a8a] transition-all"
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorialSection;