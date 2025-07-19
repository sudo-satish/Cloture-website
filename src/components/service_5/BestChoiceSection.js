import React from 'react';

const features = [
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" /><path d="M16 29l8 8 16-16" stroke="#888" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
    ),
    title: 'Impeccable organization and state-of-the-art equipment for rapid installation.'
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#888">$</text></svg>
    ),
    title: '15-year warranty on materials, for lasting peace of mind.'
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" /><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="28" fill="#888">😊</text></svg>
    ),
    title: 'A wide range of styles to satisfy all aesthetic preferences.'
  },
  {
    icon: (
      <svg width="56" height="56" fill="none" viewBox="0 0 56 56"><circle cx="28" cy="28" r="24" stroke="#888" strokeWidth="3" /><path d="M40 28l-12 8V20l12 8z" stroke="#888" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="28" cy="28" r="4" fill="#888" /></svg>
    ),
    title: 'Expert advice for harmonizing safety and design.'
  },
];

const BestChoiceSection = () => (
  <section className="w-full bg-[#f3f3f3] py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-12">PLANT FENCE: YOUR BEST CHOICE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-white border border-orange-400 rounded p-8 flex flex-col items-center text-center min-h-[220px]">
            <div className="mb-6">{f.icon}</div>
            <div className="font-bold text-lg text-gray-800">{f.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BestChoiceSection; 