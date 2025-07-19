import React from 'react';
import signatureBg from '../../assets/service_4/img-2.png';
import SignatureSection from './SignatureSection2';
import FarmlandExcellenceSection from './FarmlandExcellenceSection2';

const SignatureFarmlandSection = () => (
  <section
    className="w-full bg-white min-h-[600px] flex flex-col md:flex-row items-stretch relative bg-cover bg-center"
  >
    {/* Overlay for readability on left */}
    <div className="flex-1 flex flex-col justify-center p-0 md:p-12">
      <div className="max-w-2xl w-full mx-auto">
        <SignatureSection />
        <FarmlandExcellenceSection />
      </div>
    </div>
    {/* Right side just shows the background image */}
    <div className="flex-1 p-16">
    <img src={signatureBg} alt="fencing" className="w-full h-full object-cover rounded-t" />
    </div>
  </section>
);

export default SignatureFarmlandSection; 