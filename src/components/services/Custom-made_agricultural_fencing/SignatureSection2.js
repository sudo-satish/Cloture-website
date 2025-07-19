import React from 'react';
import signatureImg from '../../../assets/welcome/hero3.jpg';
import { useLanguage } from '../../../contexts/LanguageContext';

const SignatureSection = () => {
  const { t } = useLanguage();
  
  return (
  <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
    <div className="flex-1 flex items-start">
      {/* Vertical line */}
      <div className="hidden md:block w-2 mr-6 rounded bg-orange-500" style={{ minHeight: '100px' }} />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t('security_tailor')}</h2>
        <p className="mb-2 text-gray-800">{t('located_heart')}</p>
        <p className="text-gray-800">{t('whether_need')}</p>
      </div>
    </div>

  </section>
  );
};

export default SignatureSection; 