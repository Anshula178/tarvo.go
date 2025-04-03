import React from 'react';

const SubscribeBanner = () => {
  return (
    <section className="relative w-full max-w-7xl  mx-auto my-20  rounded-3xl overflow-hidden">
      <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch">
       
        <div className="lg:w-1/2 w-full   bg-black text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Subscribe & Get 20% off</h2>
          <p className="mb-6 text-gray-300">
            Join our newsletter and discover new destinations to inspire the traveler within. Plus, get 20% off at our
            online shop. Every week you&apos;ll receive expert advice, tips, exclusive offers, and much more.
          </p>

         
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none"
            />
            <button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
        <div
          className="lg:w-1/2 w-full h-[300px]  lg:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assests/banner.jpg')",
            willChange: 'transform',
            transition: 'transform 0.8s ease-in-out',
          }}
        ></div>
      </div>
    </section>
  );
};

export default SubscribeBanner;
