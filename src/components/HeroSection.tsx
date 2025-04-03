import React from 'react';
import { Calendar, MapPin, Search } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className='max-w-[700px] md:max-w-[1450px] mx-auto px-4'>
      <div
        className='relative w-full h-[80vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center rounded-3xl overflow-hidden mt-16 md:mt-28'
        style={{ backgroundImage: "url('/assests/heroImg.jpg')" }}
      >
        {/* Overlay for reducing image opacity */}
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>

        <div className='container mx-auto text-center text-white px-4 relative z-10'>
          {/* Hero Text */}
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6'>
            Millions Of Experiences.<br /> One Simple Search.
          </h1>
          <p className='text-lg sm:text-xl mb-8 sm:mb-12'>
            Find what makes you happy anytime, anywhere
          </p>

          {/* Search Bar */}
          <div className='bg-white rounded-full shadow-lg p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-4'>
            {/* Location Input */}
            <div className='flex items-center gap-3 text-gray-600 w-full sm:w-1/2'>
              <MapPin size={20} />
              <input
                type='text'
                placeholder='Where To? Search a place or activity'
                className='outline-none text-gray-800 placeholder-gray-500 w-full'
              />
            </div>

            {/* Date Input */}
            <div className='flex items-center gap-3 text-gray-600 w-full sm:w-1/3 border-t sm:border-t-0 sm:border-l border-gray-300 sm:pl-4 pt-2 sm:pt-0'>
              <Calendar size={20} />
              <input
                type='text'
                placeholder='26/02/2025 - 26/02/2025'
                className='outline-none text-gray-800 placeholder-gray-500 w-full'
              />
            </div>

            {/* Search Button */}
            <button className='bg-sky-600 text-white p-3 rounded-full hover:bg-sky-700 transition w-full sm:w-auto'>
              <Search size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;