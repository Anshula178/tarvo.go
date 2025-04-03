import Image from 'next/image';
import React from 'react';

const ImageBanner = () => {
  const ImageLinks = [
    { image: '/assests/img1.jpg' },
    { image: '/assests/img2.jpg' },
    { image: '/assests/img3.jpg' },
    { image: '/assests/img4.jpg' },
    { image: '/assests/img3.jpg' },
    { image: '/assests/img2.jpg' },
    { image: '/assests/img3.jpg' }
  ];

  return (
    <div className="w-full">
      <div className="flex">
        {ImageLinks.map((item, index) => (
          <div key={index} className="relative flex-1 h-[150px] md:h-[200px]">
            <Image src={item.image} alt={`image-${index}`} layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageBanner;
