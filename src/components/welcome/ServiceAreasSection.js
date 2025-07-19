import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
// import mapBg from '../assets/service-areas-bg.jpg';

const ServiceAreasSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="relative py-16 w-full overflow-hidden bg-white">
    {/* No background image */}
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-4 gap-8">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end mb-6 md:mb-0">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 text-center md:text-left">
          {t('service')} <span className="text-orange-500">{t('areas')}</span>
        </h2>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="border-l-4 border-orange-500 pl-8 text-2xl text-gray-800 max-w-xl">
          {t('expertise_desc')}
        </div>
      </div>
    </div>
  </section>
);
};

export default ServiceAreasSection; 