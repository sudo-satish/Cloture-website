import React from 'react';
import fence1 from '../../assets/service_4/fence1.jpg';
import fence2 from '../../assets/service_4/fence2.webp';
import fence3 from '../../assets/service_4/fence3.jpeg';
import fence4 from '../../assets/service_4/fence4.jpeg';

const FenceGallerySection = () => (
  <section className="w-full bg-orange-500 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      
      {/* Image Gallery - Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src={fence1} 
            alt="Black metal picket fence with snow" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src={fence2} 
            alt="Modern dark grey horizontal slat fence" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src={fence3} 
            alt="Close-up black metal picket fence" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img 
            src={fence4} 
            alt="Dark grey horizontal slat fence on concrete wall" 
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      
      {/* Text and Button Section - Bottom Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          The perfect solution for every operation. Let's talk about your project!
        </h2>
        
        <a 
          href="#" 
          className="inline-block bg-black text-white font-semibold px-8 py-4 rounded border-2 border-white hover:bg-gray-800 transition-colors duration-300 shadow-lg"
        >
          CONTACT US
        </a>
      </div>
      
    </div>
  </section>
);

export default FenceGallerySection; 