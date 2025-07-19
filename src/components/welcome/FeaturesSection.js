import React from 'react';
import modernFence from '../../assets/welcome/hero3.jpg';
import decorativeFence from '../../assets/welcome/hero3.webp';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
  <section className="max-w-7xl mx-auto px-4 py-16 text-center">
    <h2 className="text-xl md:text-2xl font-semibold mb-2 tracking-wide text-gray-700">{t('art_of_enclosing')}</h2>
    <p className="text-gray-500 mb-6">{t('elegance_touch')}</p>
    <p className="max-w-2xl mx-auto text-gray-600 mb-10">
      {t('cloture_plante_desc')}
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      <img src={modernFence} alt="Modern fence" className="w-full h-72 md:h-96 object-cover rounded shadow" />
      <img src={decorativeFence} alt="Decorative fence" className="w-full h-72 md:h-96 object-cover rounded shadow" />
    </div>
    <div className="flex flex-col items-center">
      <span className="text-orange-500 text-3xl mb-2">&#10070;</span>
      <p className="font-semibold text-gray-700 uppercase tracking-wider">{t('vision_expertise')}</p>
      <a href="#" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition font-semibold text-sm shadow">{t('contact_us_lower')}</a>
    </div>
  </section>
);
};

export default FeaturesSection; 