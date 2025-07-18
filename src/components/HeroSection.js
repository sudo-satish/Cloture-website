import React from 'react';
import heroBg from '../assets/hero-bg.webp';

const HeroSection = () => (
  <section className="relative h-[85vh] md:h-[100vh] flex items-center justify-start bg-black">
    {/* Background image */}
    <img src={heroBg} alt="Fence background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
    {/* Content */}
    <div className="relative z-10 flex flex-col items-start justify-center h-full pl-8 md:pl-32 font-hero font-normal">
      <span className="text-orange-500 text-xl md:text-2xl font-semibold mb-2">Plant Fence</span>
      <h1 className="text-left text-3xl md:text-5xl font-normal mb-6 leading-tight text-white drop-shadow-lg">
        Your fence installation<br />experts in Ottawa and<br />Gatineau
      </h1>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-black font-semibold text-lg px-10 py-3 rounded transition shadow mb-2 tracking-wide" style={{letterSpacing: '1px'}}>CONTACT US</a>
    </div>
  </section>
);

export default HeroSection; 