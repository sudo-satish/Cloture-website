import React from 'react';

const specialties = [
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" />
        <path d="M16 29l8 8 16-16" stroke="#888" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "Fencing for livestock enclosures"
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#888">$</text>
      </svg>
    ),
    text: "Safety barriers for fields and crops"
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" />
        <path d="M20 20l16 16M36 20l-16 16" stroke="#888" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    text: "Electric fencing for livestock management"
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" />
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#888">😊</text>
      </svg>
    ),
    text: "Customized installation according to the terrain and your needs"
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" />
        <circle cx="28" cy="28" r="8" stroke="#888" strokeWidth="3" />
        <path d="M28 12v8M28 36v8M44 28h-8M12 28h8" stroke="#888" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    text: "Maintenance and repair of existing fences"
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56">
        <circle cx="28" cy="28" r="24" fill="#f97316" stroke="#f97316" strokeWidth="3" />
        <path d="M20 28l8 8 16-16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: "CONTACT US",
    isCTA: true
  }
];

const BestChoiceSection = () => (
  <section className="w-full bg-[#f3f3f3] py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">OUR SPECIALTIES</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specialties.map((specialty, i) => (
          <div 
            key={i} 
            className={`border border-orange-400 rounded p-6 flex flex-col items-center text-center min-h-[180px] ${
              specialty.isCTA ? 'bg-orange-500 text-white' : 'bg-white text-gray-800'
            }`}
          >
            <div className="mb-4">{specialty.icon}</div>
            <div className={`font-medium text-sm ${specialty.isCTA ? 'text-white underline' : 'text-gray-800'}`}>
              {specialty.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BestChoiceSection; 