// Developed by WanDev
import React from 'react';
import BackButton from './BackButton';

interface Props {
  title: string;
  subtitle: string;
  content: string;
  onBack: () => void;
}

const StaticPage: React.FC<Props> = ({ title, subtitle, content, onBack }) => {
  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-36 bg-[#fcfbf9] min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        <BackButton onClick={onBack} />
        
        <div className="max-w-3xl">
          <span className="text-[10px] tracking-[0.5em] text-[#8a8a8a] uppercase block mb-6">{subtitle}</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light mb-12">{title}</h1>
          <div className="w-[1px] h-20 bg-[#1a1a1a]/20 mb-12"></div>
          <div className="space-y-8 text-lg font-light leading-relaxed text-[#555]">
            <p>{content}</p>
            <p>For more detailed information, please do not hesitate to reach out to our global concierge service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticPage;