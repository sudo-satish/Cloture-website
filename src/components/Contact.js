import React from 'react';
import logo from '../assets/logo.png';
import bgImg from '../assets/contact-bg.jpg';
import ContactForm from './ContactForm';

const ArrowIcon = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
    <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="8" />
    <path d="M40 80L80 40" stroke="white" strokeWidth="8" strokeLinecap="round" />
    <path d="M60 40H80V60" stroke="white" strokeWidth="8" strokeLinecap="round" />
  </svg>
);

const Contact = () => (
  <>
    <div className="w-full min-h-screen flex items-center justify-center relative" style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-16">
        {/* Left content */}
        <div className="flex-1 w-full max-w-xl bg-black/70 rounded-lg p-8 flex flex-col items-start text-white">
          <ArrowIcon />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">CLOSE IN STYLE</h1>
          <h2 className="text-2xl md:text-2xl font-normal mb-4">Take the first step towards transformation</h2>
          <div className="h-1 w-24 bg-orange-500 mb-4" />
          <div className="border-l-4 border-orange-500 pl-6 mb-6">
            <div className="mb-2">Ready to transform your outdoor space?</div>
            <div>Clôture Plante in Ottawa and Gatineau is here to create the space you've always dreamed of. Contact us now for a free quote!</div>
          </div>
        </div>
        {/* Right content */}
        <div className="relative w-full max-w-md flex flex-col items-center md:items-start justify-start py-12 px-6 bg-orange-500 rounded-lg">
          {/* Logo watermark */}
          <img src={logo} alt="Clôture Plante Logo" className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none select-none" style={{zIndex: 1}} />
          <div className="relative z-10 flex flex-col items-center w-full text-center text-black">
            <h2 className="text-2xl font-bold mb-2">Address</h2>
            <div className="mb-4">1201 Bd Saint-Joseph Gatineau,<br />QC J8Z 2C3</div>
            <h2 className="text-2xl font-bold mb-2">Phone</h2>
            <div className="mb-4">1 (819) 800-8791</div>
            <h2 className="text-2xl font-bold mb-2">E-mail</h2>
            <div className="mb-4">gestion@clotureplante.com</div>
            <h2 className="text-2xl font-bold mb-2">Service areas</h2>
            <div className="mb-4">Ottawa Gatineau</div>
            <h2 className="text-2xl font-bold mb-2">Opening hours</h2>
            <div>Monday - Friday 9am - 4pm<br />Saturday 10am - 2pm</div>
          </div>
        </div>
      </div>
    </div>
    <ContactForm />
  </>
);

export default Contact; 