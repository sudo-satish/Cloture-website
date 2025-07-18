import React from 'react';
import logo from '../assets/logo.png';

const AboutSection = () => (
  <section className="bg-black text-white py-12">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="mb-6 md:mb-0 md:w-2/3 flex">
        {/* Vertical line */}
        <div className="hidden md:block w-2 mr-6 rounded bg-orange-500" style={{ minHeight: '80px' }} />
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-orange-400">For four years,</h3>
          <p className="text-gray-200 text-base md:text-lg">Clôture Plante has established itself as the choice of choice.<br />
          <span className="text-gray-400 text-sm md:text-base">Since then, with the support of our customers and dedicated staff, we have continued to grow and innovate, always putting quality and customer satisfaction first.</span></p>
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <img src={logo} alt="Clôture Plante Logo" className="h-28 w-auto object-contain" />
      </div>
    </div>
  </section>
);

export default AboutSection; 