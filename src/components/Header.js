import React, { useState } from 'react';
import logo from '../assets/logo.png';

const servicesList = [
  'Fence installation',
  'Fence straightening and repair',
  'Temporary fence rental',
  'Custom-made agricultural fencing',
  'Fencing and railings',
];

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lang, setLang] = useState('en');

  return (
    <header className="w-full bg-black bg-opacity-70 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Clôture Plante Logo" className="h-12 w-12 object-contain" />
          <span className="text-white font-bold text-lg tracking-widest uppercase">Clôture Plante</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-white hover:text-orange-500 transition">Welcome</a>
          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-white hover:text-orange-500 transition flex items-center focus:outline-none">
              Services
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dropdownOpen && (
                <ul className="absolute left-0 mt-2 w-72 bg-white text-black rounded shadow-lg z-50 p-1">
                {servicesList.map((item, idx) => (
                    <li key={idx} className="px-4 py-2 hover:bg-orange-100 cursor-pointer break-words whitespace-normal border-b last:border-b-0 text-sm leading-snug">{item}</li>
                ))}
              </ul>
            )}
          </div>
          <a href="#" className="text-white hover:text-orange-500 transition">Gallery</a>
          <a href="#" className="text-white hover:text-orange-500 transition">Make an appointment</a>
          <a href="#" className="text-white hover:text-orange-500 transition">Contact</a>
        </nav>
        {/* Contact Button and Localisation */}
        <div className="flex items-center space-x-2">
          <a href="#" className="ml-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition font-semibold text-sm shadow">1 (819) 800-8791</a>
          <span className="ml-2 flex items-center gap-0.5 border border-white rounded px-2 py-1 text-xs font-semibold bg-black/60">
            <button
              className={`px-1 rounded transition focus:outline-none ${lang === 'en' ? 'text-orange-500 font-bold' : 'text-white'}`}
              onClick={() => setLang('en')}
            >
              En
            </button>
            <span className="text-white mx-0.5">/</span>
            <button
              className={`px-1 rounded transition focus:outline-none ${lang === 'fr' ? 'text-orange-500 font-bold' : 'text-white'}`}
              onClick={() => setLang('fr')}
            >
              Fr
            </button>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header; 