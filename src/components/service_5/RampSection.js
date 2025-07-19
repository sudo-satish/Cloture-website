import React from 'react';
// Replace with actual images when provided
import img1 from '../../assets/service_5/ramp_1.webp';
import img2 from '../../assets/service_5/ramp_2.jpg';

const ramps = [
  {
    img: img1,
    title: 'Contour (for patio and terrace)',
    desc: 'Safety and aesthetics at every step. These railings not only enhance the safety of your outdoor spaces, but also add considerable aesthetic value, blending perfectly with the architecture of your home.'
  },
  {
    img: img2,
    title: 'Aluminum ramp',
    desc: 'Lightweight and durable for your comfort. The perfect combination of strength and lightness, these railings are designed to last without requiring intensive maintenance, while offering a stylish finish that complements any exterior design.'
  },
];

const RampSection = () => (
  <section className="w-full bg-orange-500 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-white text-center text-3xl font-bold mb-8">RAMP</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ramps.map((r, i) => (
          <div key={i} className="bg-white rounded shadow flex flex-col h-full">
            <div className="relative w-full h-64 overflow-hidden rounded-t">
              <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg mb-2">{r.title}</h3>
                <p className="text-gray-700 text-sm">{r.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RampSection; 