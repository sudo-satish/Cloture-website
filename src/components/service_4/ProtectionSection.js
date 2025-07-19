import React from 'react';
import bgImg from '../../assets/service_4/img-3.jpg';

const ProtectionSection = () => (
  <section className="relative w-full min-h-[500px] flex items-center bg-black">
    {/* Background Image */}
    <img 
      src={bgImg} 
      alt="Agricultural protection background" 
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50" />
    
    {/* Content Container */}
    <div className="relative z-10 max-w-7xl mx-auto w-full px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content - Left Side */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-start">
            {/* Orange vertical line */}
            <div className="w-1 h-16 bg-orange-500 mr-6 mt-2"></div>
            
            <div>
              <h2 className="text-orange-500 text-3xl md:text-4xl font-bold mb-6">
                Protect your agricultural investment
              </h2>
              
              <div className="space-y-4 text-white">
                <p className="text-lg leading-relaxed">
                  Faced with the risk of animal intrusion or escape, custom-made agricultural fencing becomes essential.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Clôture Plante offers solutions that effectively protect your farm, ensuring the safety of livestock and crops against predators and intruders, while respecting the standards and aesthetics of your property.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Apple Logo - Right Side */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1024" 
              height="1024" 
              viewBox="0 0 1024 1024" 
              className="w-full h-full text-orange-500"
            >
              <path 
                d="M864 236.8c-86.4-67.2-185.6-89.6-297.6-64 16-51.2 44.8-83.2 89.6-112 16-9.6 19.2-28.8 9.6-44.8s-28.8-19.2-44.8-9.6C550.4 51.2 512 105.6 496 182.4c-124.8-41.6-236.8-22.4-336 54.4-57.6 44.8-124.8 144-128 284.8-3.2 112 38.4 284.8 252.8 464 32 25.6 70.4 41.6 112 41.6 48 0 92.8-16 115.2-28.8 22.4 9.6 67.2 28.8 115.2 28.8 44.8 0 80-12.8 112-41.6 211.2-179.2 256-352 252.8-464-3.2-140.8-70.4-243.2-128-284.8zM697.6 934.4c-19.2 16-44.8 25.6-70.4 25.6-51.2 0-99.2-28.8-99.2-28.8-3.2-3.2-9.6-3.2-16-3.2s-12.8 0-16 3.2c0 0-48 28.8-99.2 28.8-28.8 0-51.2-9.6-70.4-25.6C134.4 771.2 96 617.6 96 521.6c3.2-108.8 54.4-195.2 102.4-233.6 83.2-64 176-76.8 284.8-41.6-3.2 32-6.4 64-6.4 102.4-35.2-6.4-60.8-22.4-80-38.4-12.8-9.6-35.2-6.4-44.8 6.4s-6.4 35.2 6.4 44.8c44.8 35.2 99.2 54.4 150.4 54.4s105.6-19.2 150.4-54.4c12.8-9.6 16-32 6.4-44.8s-32-16-44.8-6.4c-19.2 12.8-44.8 28.8-80 35.2 0-41.6 3.2-76.8 6.4-108.8 102.4-32 192-16 272 44.8 51.2 38.4 102.4 124.8 102.4 233.6 9.6 102.4-28.8 256-224 419.2z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProtectionSection; 