import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
// Replace with actual background image when provided
import bgImg from '../../../assets/Custom-made agricultural fencing/hero-img.avif';

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="relative h-full min-h-screen flex items-center justify-center bg-black">
    <img src={bgImg} alt="Agriculture fencing background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
      <span className="text-orange-500 text-xl md:text-2xl font-semibold mb-2">{t('plant_fence')}</span>
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 text-center">{t('custom_agriculture')}</h1>
      <p className="text-white text-lg md:text-xl text-center mb-8 max-w-2xl">
        {t('agriculture_desc')}
      </p>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition text-lg shadow">{t('contact_us')}</a>
    </div>
  </section>
  );
};

export default HeroSection; 