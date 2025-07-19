import React from 'react';
import workerDrill from '../../assets/welcome/fence-installation.jpeg';
import workerMeasure from '../../assets/welcome/repair.jpeg';
import largeFence from '../../assets/welcome/rental.jpeg';
import rollsFencing from '../../assets/welcome/custom.jpeg';
import FencingnRailing from '../../assets/welcome/railing.jpeg';
import servicesContact from '../../assets/welcome/services-contact.webp';
import { useLanguage } from '../../contexts/LanguageContext';

const services = [
  { img: workerDrill, alt: 'Worker with drill', caption: 'Fence installation' },
  { img: workerMeasure, alt: 'Worker measuring fence', caption: 'Fence straightening and repair' },
  { img: largeFence, alt: 'Large fenced area', caption: 'Temporary fence rental' },
  { img: FencingnRailing, alt: 'Fencing and railings', caption: 'Fencing and railings' },
  { img: rollsFencing, alt: 'Rolls of fencing', caption: 'Custom-made agricultural fencing' },
  { img: servicesContact, alt: 'Contact us', caption: 'Contact us' },
];

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    { img: workerDrill, alt: 'Worker with drill', caption: t('fence_installation') },
    { img: workerMeasure, alt: 'Worker measuring fence', caption: t('fence_repair') },
    { img: largeFence, alt: 'Large fenced area', caption: t('temporary_rental') },
    { img: FencingnRailing, alt: 'Fencing and railings', caption: t('fencing_railings') },
    { img: rollsFencing, alt: 'Rolls of fencing', caption: t('custom_agricultural') },
    { img: servicesContact, alt: 'Contact us', caption: t('contact_us') },
  ];
  
  return (
  <section className="max-w-7xl mx-auto px-4 py-16">
    <h3 className="text-center text-lg md:text-xl font-semibold mb-2 text-gray-700">{t('services')}</h3>
    <p className="text-center text-gray-500 mb-8">{t('residential_commercial')}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {services.map((service, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <img src={service.img} alt={service.alt} className="w-full h-72 md:h-96 object-cover rounded shadow mb-4" />
          <span className="text-gray-700 font-medium text-center">{service.caption}</span>
        </div>
      ))}
    </div>
  </section>
);
};

export default ServicesSection; 