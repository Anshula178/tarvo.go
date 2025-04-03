"use client"
import React from 'react'; 
import { MapPin, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';


const activities = [
  {
    id: 1,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Tour & Cruise'],
    price: 79,
    nights: '4 nights',
    image: [
        '/assests/img1.jpg',
        '/assests/img2.jpg',
        '/assests/img1.jpg'
    ],
    onSale: false,
  },
  {
    id: 2,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img2.jpg',
      '/assests/img1.jpg',
      '/assests/img2.jpg'
    ],
    onSale: true,
  },
  {
    id: 3,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img3.jpg',
      '/assests/img2.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 4,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Rail Tour'],
    price: 79,
    nights: '4 nights',
    image: [
      '/assests/img4.jpg',
      '/assests/img3.jpg',
      '/assests/img4.jpg'

    ],
    onSale: false,
  },
  {
    id: 5,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img3.jpg',
      '/assests/img1.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 6,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img2.jpg',
      '/assests/img3.jpg',
      '/assests/img2.jpg'
    ],
    onSale: true,
  },
  {
    id: 7,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img3.jpg',
      '/assests/img2.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 8,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Rail Tour'],
    price: 79,
    nights: '4 nights',
    image: [
      '/assests/img4.jpg',
      '/assests/img3.jpg',
      '/assests/img4.jpg'
    ],
    onSale: false,
  },
  {
    id: 9,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img1.jpg',
      '/assests/img2.jpg',
      '/assests/img1.jpg'
    ],
    onSale: true,
  },
  {
    id: 10,
    country: 'Tokyo, Japan',
    title: 'Cherry Blossom Experience',
    rating: 0,
    reviews: 0,
    tags: ['Rail Tour', 'Wildlife'],
    price: 62,
    oldPrice: 87,
    nights: '2 days - 1 night',
    image: [
      '/assests/img3.jpg',
      '/assests/img2.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
  {
    id: 11,
    country: 'China',
    title: 'Mutianyu Great Wall ',
    rating: 0,
    reviews: 0,
    tags: ['Escorted Tour', 'Tour & Cruise'],
    price: 79,
    nights: '4 nights',
    image: [
      '/assests/img3.jpg',
      '/assests/img1.jpg',
      '/assests/img3.jpg'
    ],
    onSale: false,
  },
  {
    id: 12,
    country: 'Thailand',
    title: ' Krabi Adventure',
    rating: 5,
    reviews: 1,
    tags: ['Rail Tour', 'River Cruise'],
    price: 210,
    oldPrice: 250,
    nights: '2 days',
    image: [
      '/assests/img4.jpg',
      '/assests/img1.jpg',
      '/assests/img3.jpg'
    ],
    onSale: true,
  },
];


const PopularActivities = () => {
  const router=useRouter()
  
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Activities</h2>
      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform  flex flex-col cursor-pointer " onClick={()=>router.push(`/activities/${activity.id}`)}
          >
            <div className="relative h-72">
              <img
                src={activity.image[0]}
                alt={activity.title}
                className="w-full h-full object-cover cursor-pointer transform hover:scale-110 "
                style={{
                    willChange: "transform",
                    transition: "transform 0.8s ease-in-out", 
                  }}
              />
              {activity.onSale && (
                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-lg">
                  On Discount
                </span>
              )}
            </div>

            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <MapPin size={18} />
                  <span className='text-base'>{activity.country}</span>
                </div>

                <h3 className="text-base font-semibold text-gray-800 mb-4 leading-snug">
                  {activity.title}
                </h3>

                <div className="flex items-center gap-1 mb-4">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <p className='text-black'>{activity.rating} <span className='text-gray-500'>({activity.reviews} reviews)</span></p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.tags.map((tag, index) => (
                    <span
                      key={index}
                      className=" bg-orange-400 text-white text-xs px-1 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {activity.oldPrice && (
                    <span className="text-red-500 line-through mr-2">
                      ${activity.oldPrice}
                    </span>
                  )}
                  <span className="text-base font-semibold text-black">From ${activity.price}</span>
                </div>
                <span className="text-gray-600 text-base">{activity.nights}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularActivities;
