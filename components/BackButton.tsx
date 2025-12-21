// Developed by WanDev
import React from 'react';

interface Props {
  onClick: () => void;
  className?: string;
  label?: string;
}

const BackButton: React.FC<Props> = ({ onClick, className = "mb-16", label = "BACK" }) => {
  return (
    <button 
      onClick={onClick}
      className={`text-[10px] tracking-[0.3em] font-medium text-[#8a8a8a] hover:text-black transition-colors flex items-center gap-2 group ${className}`}
    >
      <svg 
        className="w-3 h-3 transition-transform group-hover:-translate-x-1" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
      </svg>
      {label}
    </button>
  );
};

export default BackButton;