import React from 'react';
import logo from '../../../assets/logo.png';
import { useLanguage } from '../../../contexts/LanguageContext';
// Replace with actual background image when provided
import bgImg from '../../../assets/welcome/hero-bg.webp';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center bg-black">
    <img src={bgImg} alt="Fencing background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
      <img src={logo} alt="Clôture Plante Logo" className="h-16 md:h-24 mb-4" />
      <span className="text-orange-500 text-xl md:text-2xl font-semibold mb-2">{t('plant_fence')}</span>
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 text-center">{t('fencing_railings')}</h1>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition text-lg shadow">{t('contact_us')}</a>
    </div>
  </section>
  );
};

export default HeroSection; 