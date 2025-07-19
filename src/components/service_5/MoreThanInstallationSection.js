import React from 'react';
import bgImg from '../../assets/service_5/some_bg.jpg';

const ArrowIcon = () => (
  <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 mx-auto">
    <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" />
    <path d="M40 80L80 40" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M60 40H80V60" stroke="white" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const MoreThanInstallationSection = () => (
  <section className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center">
    <img src={bgImg} alt="More than installation background" className="absolute inset-0 w-full h-full object-cover opacity-60" />
    <div className="absolute inset-0 bg-black/70" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full">
      <ArrowIcon />
      <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-6 text-center">We offer more than just installation.</h2>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition text-lg shadow">CONTACT US</a>
    </div>
  </section>
);

export default MoreThanInstallationSection; 