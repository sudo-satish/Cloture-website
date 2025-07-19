import React from 'react';
import logo from '../../assets/logo.png';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="bg-black text-white py-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="mb-6 md:mb-0 md:w-2/3 flex">
        {/* Vertical line */}
        <div className="hidden md:block w-2 mr-6 rounded bg-orange-500" style={{ minHeight: '80px' }} />
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-orange-400">{t('for_four_years')}</h3>
          <p className="text-gray-200 text-base md:text-lg">{t('choice_of_choice')}<br />
          <span className="text-gray-400 text-sm md:text-base">{t('since_then')}</span></p>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <img src={logo} alt="Clôture Plante Logo" className="h-28 w-auto object-contain" />
      </div>
    </div>
  </section>
  );
};

export default AboutSection; 