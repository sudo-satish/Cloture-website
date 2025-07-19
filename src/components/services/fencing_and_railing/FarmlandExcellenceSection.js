import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
// Replace with actual image when provided

const ArrowIcon = () => (
  <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4">
    <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" />
    <path d="M40 80L80 40" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M60 40H80V60" stroke="white" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const FarmlandExcellenceSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
    <div className="flex-1 flex flex-col justify-center bg-black rounded-lg p-8 text-white items-start">
      <ArrowIcon />
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('farmland_excellence')}</h2>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded transition text-lg mb-2">{t('contact_us')}</a>
    </div>
  </section>
  );
};

export default FarmlandExcellenceSection; 