import React from 'react';
import logo from '../assets/logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
  <footer className="bg-black text-white py-10 ">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo and Address */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <img src={logo} alt="Clôture Plante Logo" className="h-12 w-12 object-contain" />
          <span className="font-bold text-lg tracking-widest uppercase">Clôture Plante</span>
        </div>
        <div className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: t('address_value') }}>
        </div>
      </div>
      {/* Contact Info */}
      <div>
        <div className="mb-2 font-semibold">{t('phone')}</div>
        <div className="text-gray-400 text-sm mb-4">{t('phone_value')}</div>
        <div className="mb-2 font-semibold">{t('email')}</div>
        <div className="text-gray-400 text-sm mb-4">{t('email_value')}</div>
      </div>
      {/* Service Areas and Hours */}
      <div>
        <div className="mb-2 font-semibold">{t('service_areas')}</div>
        <div className="text-gray-400 text-sm mb-4">{t('areas_value')}</div>
        <div className="mb-2 font-semibold">{t('opening_hours')}</div>
        <div className="text-gray-400 text-sm" dangerouslySetInnerHTML={{ __html: t('hours_value') }}></div>
      </div>
    </div>
    <div className="text-center text-gray-500 text-xs mt-8">{t('copyright')}</div>
      </footer>
    );
  };

export default Footer; 