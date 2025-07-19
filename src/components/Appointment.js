import React from 'react';
import logo from '../assets/logo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Appointment = () => {
  const { t } = useLanguage();

  return (
  <div className="w-full min-h-[calc(100vh-64px)] flex flex-col justify-between">
    {/* Top section with black bg */}
    <div className="bg-black flex flex-col items-center justify-center py-16 px-4 flex-shrink-0">
      <img src={logo} alt="Clôture Plante Logo" className="h-24 md:h-32 mb-8" />
      <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center mb-8">{t('make_appointment')}</h1>
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition text-lg">{t('contact_us')}</button>
    </div>
    {/* Orange section */}
    <div className="bg-orange-500 w-full py-16 px-4 flex flex-col items-center flex-shrink-0">
      <div className="max-w-3xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{t('expertise_delivered')}</h2>
        <p className="text-gray-900 text-lg mb-4">{t('free_service')}</p>
        <p className="text-gray-900 text-xl font-bold">{t('book_consultation')}</p>
      </div>
    </div>
  </div>
);
};

export default Appointment; 