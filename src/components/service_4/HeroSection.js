import React from 'react';
// Replace with actual background image when provided
import bgImg from '../../assets/service_4/hero-img.avif';

const HeroSection = () => (
  <section className="relative h-full min-h-screen flex items-center justify-center bg-black">
    <img src={bgImg} alt="Agriculture fencing background" className="absolute inset-0 w-full h-full object-cover opacity-80" />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
      <span className="text-orange-500 text-xl md:text-2xl font-semibold mb-2">PLANT FENCE</span>
      <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 text-center">Custom Agriculture Fencing</h1>
      <p className="text-white text-lg md:text-xl text-center mb-8 max-w-2xl">
        Professional fencing solutions designed specifically for agricultural needs
      </p>
      <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition text-lg shadow">CONTACT US</a>
    </div>
  </section>
);

export default HeroSection; 