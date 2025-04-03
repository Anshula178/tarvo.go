"use client"
import React from 'react';

interface DestinationCardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<DestinationCardProps> = ({ title, description, image }) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden group h-96 w-72 cursor-pointer"
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-60 transition duration-300"></div>
      <div className="absolute bottom-4 group-hover:hidden left-4 text-white">
        <h3 className="text-3xl font-bold ">{title}</h3>
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-3xl font-bold hover:text-sky-400">{title}</h3>
        <p className="mt-2">{description}</p>
        <button className="mt-4 border border-white rounded-full hover:bg-sky-600 hover:text-white px-4 py-2">See All Tours</button>
      </div>
    </div>
  );
};

export default Card;
