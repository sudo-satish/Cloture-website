import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import {
  processImage,
  drillImage,
  fenceCutting
} from '../../../assets/services/fencestraighteningandrepair';

const FenceStraighteningAndRepair = () => {
  const { t } = useLanguage();

  return (
    <div className="fence-straightening-repair-page">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${fenceCutting})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-105 brightness-50" style={{ backgroundImage: `url(${fenceCutting})` }}></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-orange-500 text-xl md:text-2xl font-bold mb-4 tracking-wider">
              {t('fenceStraighteningHeroSubtitle')}
            </div>
            <h1 className="text-5xl md:text-6xl font-semibold text-white mb-8">
              {t('fenceStraighteningHeroTitle')}
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium text-base transition-colors">
              {t('contact_us')}
            </button>
          </div>
        </div>
      </section>

      {/* Combined Restore Strength and A Fence Like New Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col h-full">
              {/* Top Section - Restore Strength and Beauty */}
              <div className="flex-1 max-w-full">
                <h2 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight">
                  {t('restoreStrengthTitle')}
                </h2>
                <div className="w-20 h-1 bg-orange-500 mb-8"></div>
                <div className="space-y-4 text-gray-700 text-base leading-relaxed w-full">
                  <p className="w-full">
                    {t('restoreStrengthDescription1')}
                  </p>
                  <p className="w-full">
                    {t('restoreStrengthDescription2')}
                  </p>
                </div>
              </div>
              
              {/* Bottom Section - A Fence Like New Starts Here */}
              <div className="bg-black p-8 rounded-lg mt-8">
                <div className="bg-transparent border-2 border-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  {t('fenceLikeNewTitle')}
                </h3>
                <div className="text-center">
                  <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-medium text-sm hover:bg-white hover:text-black transition-colors">
                    {t('contact_us')}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src={drillImage}
                alt="Fence Repair Process with Metallic Tool" 
                className="w-full h-auto object-cover lg:h-[600px] md:h-[500px] h-[400px] transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choosing Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-16">
            {t('choosingTeamTitle')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('executionSpeed')}
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('expertTeam')}
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('organizedStructure')}
              </h3>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('fastDelivery')}
              </h3>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {t('fifteenYearGuarantee')}
              </h3>
            </div>

            {/* Contact CTA */}
            <div className="bg-orange-500 rounded-lg p-8 text-center text-white shadow-lg">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-4">
                {t('contact_us')}
              </h3>
              <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                {t('get_started')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* A Fence Like New, Unrivaled Service Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${processImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-semibold mb-8">
                {t('unrivaledServiceTitle')}
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  {t('unrivaledServiceDescription1')}
                </p>
                <p>
                  {t('unrivaledServiceDescription2')}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-orange-500 rounded-full p-8">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FenceStraighteningAndRepair; 