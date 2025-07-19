import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => (
  <footer className="bg-black text-white py-10 ">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo and Address */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <img src={logo} alt="Clôture Plante Logo" className="h-12 w-12 object-contain" />
          <span className="font-bold text-lg tracking-widest uppercase">Clôture Plante</span>
        </div>
        <div className="text-gray-400 text-sm">
          456, 1st Saint Street<br />
          Ottawa, ON K1A 2B3
        </div>
      </div>
      {/* Contact Info */}
      <div>
        <div className="mb-2 font-semibold">Phone</div>
        <div className="text-gray-400 text-sm mb-4">+1 514 123 4567</div>
        <div className="mb-2 font-semibold">E-mail</div>
        <div className="text-gray-400 text-sm mb-4">info@clotureplante.com</div>
      </div>
      {/* Service Areas and Hours */}
      <div>
        <div className="mb-2 font-semibold">Service areas</div>
        <div className="text-gray-400 text-sm mb-4">Ottawa, Gatineau</div>
        <div className="mb-2 font-semibold">Opening hours</div>
        <div className="text-gray-400 text-sm">Mon-Fri: 8am - 6pm<br />Sat: 9am - 2pm</div>
      </div>
    </div>
    <div className="text-center text-gray-500 text-xs mt-8">© 2025 All rights reserved | Privacy Policy | Plan | Web: Created by ABCD Agency</div>
  </footer>
);

export default Footer; 