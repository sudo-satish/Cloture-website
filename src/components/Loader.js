import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="relative">
        {/* Main spinning circle */}
        <div className="w-16 h-16 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin"></div>
        
        {/* Subtle text */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm font-medium tracking-wide">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader; 