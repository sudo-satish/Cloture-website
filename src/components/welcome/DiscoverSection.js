import React from 'react';
import discoverBg from '../../assets/welcome/service-areas-bg.jpg';
import { useLanguage } from '../../contexts/LanguageContext';

const DiscoverSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="relative py-16 bg-gray-100 text-center overflow-hidden">
    {/* Background image */}
    <img src={discoverBg} alt="Discover background" className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none select-none" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 max-w-3xl mx-auto px-4">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white" dangerouslySetInnerHTML={{ __html: t('discover_ideal') }}></h3>
      <a href="#" className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded transition font-semibold text-lg shadow">{t('contact_us')}</a>
    </div>
  </section>
  );
};

export default DiscoverSection; 