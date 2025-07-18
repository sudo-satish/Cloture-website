import React from 'react';
import secureBg from '../assets/secure-bg.jpeg';

const SecureSection = () => (
  <section className="relative bg-white py-12 overflow-hidden">
    {/* Background image */}
    <img src={secureBg} alt="Secure background" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
      <div className="md:w-2/3 mb-6 md:mb-0">
        <h4 className="text-lg font-semibold mb-2 text-white">Secure and beautify your land</h4>
        <p className="text-white">At Clôture Plante, we aim to secure homes, yards, and businesses with style and reliability. Our team is dedicated to bringing you a sturdy and aesthetic fence solution.<br />Let us help transform your property!</p>
      </div>
      <div className="md:w-1/3 flex justify-center md:justify-end">
        <div className="bg-orange-500 text-white rounded p-6 shadow-lg text-center">
          <p className="font-semibold mb-2">Your project, our passion. Together, let's shape your space.</p>
          <a href="#" className="mt-2 inline-block bg-white text-orange-500 hover:bg-orange-600 hover:text-white px-4 py-2 rounded transition font-semibold text-sm">Contact us</a>
        </div>
      </div>
    </div>
  </section>
);

export default SecureSection; 