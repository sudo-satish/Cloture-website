import React from 'react';
import signatureImg from '../../assets/welcome/hero3.jpg';

const SignatureSection = () => (
  <section className="w-full bg-white py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-8 max-w-7xl mx-auto">
    <div className="flex-1 flex items-start">
      {/* Vertical line */}
      <div className="hidden md:block w-2 mr-6 rounded bg-orange-500" style={{ minHeight: '100px' }} />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">WHEN SECURITY MEETS TAILOR-MADE  </h2>
        <p className="mb-2 text-gray-800">Located in the heart of Ottawa and Gatineau, Clôture Plante stands out for its expertise in custom agricultural fencing.</p>
        <p className="text-gray-800">Whether you need to protect your crops, safely raise your livestock, or delineate your property, our customized solutions meet every specific need.</p>
      </div>
    </div>

  </section>
);

export default SignatureSection; 