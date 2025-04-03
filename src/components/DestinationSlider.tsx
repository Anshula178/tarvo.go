"use client";

import React from "react";
import Card from "./Card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const DestinationSlider = () => {
  const destinations = [
    {
      title: "Bali",
      description: "Explore the beauty of Bali.",
      image: "/assests/img1.jpg",
    },
    {
      title: "Cancun",
      description: "Relax on the beaches of Cancun.",
      image: "/assests/img2.jpg",
    },
    {
      title: "Bangkok",
      description: "Discover Bangkok with our special tours.",
      image: "/assests/img3.jpg",
    },
    {
      title: "Nha Trang",
      description: "Enjoy the coastline of Nha Trang.",
      image: "/assests/img4.jpg",
    },
    {
      title: "Paris",
      description: "Experience the charm of Paris.",
      image: "/assests/img1.jpg",
    },
    {
      title: "Tokyo",
      description: "Explore the futuristic city of Tokyo.",
      image: "/assests/img2.jpg",
    },
    {
      title: "Maldives",
      description: "Relax in the tropical Maldives.",
      image: "/assests/img3.jpg",
    },
    {
      title: "Dubai",
      description: "Luxury awaits in Dubai.",
      image: "/assests/img4.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="flex justify-between items-center pb-6 flex-col md:flex-row">
        <h1 className="font-bold text-black text-3xl mb-4 md:mb-0">
          Top Destinations for Your Next Vacation
        </h1>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Previous Slide"
            className="prev bg-slate-100 p-3 rounded-full cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8 text-black" />
          </button>
          <button
            aria-label="Next Slide"
            className="next bg-slate-100 p-3 rounded-full cursor-pointer"
          >
            <ChevronRight className="w-8 h-8 text-black" />
          </button>
        </div>
      </div>

     
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={{ nextEl: ".next", prevEl: ".prev" }}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {destinations.map((destination, index) => (
          <SwiperSlide key={index}>
            <Card {...destination} />
          </SwiperSlide>
        ))}
      </Swiper>

      
      <div className="flex mt-12 justify-center">
        <button className="px-6 py-2 rounded-full text-sky-600 border-2 border-sky-600 hover:bg-sky-600 hover:text-white">
          See All Destinations
        </button>
      </div>
    </div>
  );
};

export default DestinationSlider;
